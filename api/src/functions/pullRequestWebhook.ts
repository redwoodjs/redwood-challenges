import type { APIGatewayEvent, Context } from 'aws-lambda'
import got from 'got'

import { InvalidPayloadError } from 'src/lib/errors'
import { logger } from 'src/lib/logger'
import {
  verifyEvent,
  VerifyOptions,
  WebhookVerificationError,
} from '@redwoodjs/api/webhooks'

import { createEntry } from 'src/services/entries/entries'
import { parse } from 'src/lib/github/pullRequestParser'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, _context: Context) => {
  const webhookInfo = { webhook: 'github-pull-request' }
  const webhookLogger = logger.child({ webhookInfo })

  webhookLogger.trace('Invoked pullRequestWebhook function')

  // webhookLogger.debug({ webhookEvent: event }, 'Webhook event')

  try {
    const options = {
      signatureHeader: process.env.GITHUB_WEBHOOK_SIGNATURE_HEADER,
    } as VerifyOptions

    verifyEvent('sha256Verifier', {
      event,
      secret: process.env.GITHUB_PULL_REQUEST_WEBHOOK_SECRET,
      options,
    })

    if (event.headers['x-github-event'] === 'ping') {
      webhookLogger.debug(
        { hookId: event.headers['x-github-hook-id'] },
        'GitHub webhook ping received '
      )

      return {
        statusCode: 200,
        body: JSON.stringify({
          data: {
            message: 'GitHub webhook ping received.',
            hookId: event.headers['x-github-hook-id'],
          },
        }),
      }
    }

    if (event.headers['x-github-event'] !== 'pull_request') {
      throw new InvalidPayloadError(
        'Webhook is not a GitHub Pull Request event.'
      )
    }

    const payload = JSON.parse(event.body) || {}
    const pullRequest = parse({ payload })

    if (!pullRequest.isValid) {
      throw new InvalidPayloadError(
        'Payload is invalid. Either it was not a proper GitHub Pull Request, or the PR has not been merged.'
      )
    }

    const response = await got(pullRequest.filesUrl)
    const pullRequestFiles = JSON.parse(response.body)
    webhookLogger.debug(pullRequestFiles, 'Fetched pullRequestFiles')

    const fileUrls =
      pullRequestFiles
        ?.map((info) =>
          info.filename.endsWith('.html') ? info.raw_url : undefined
        )
        .filter((filename) => filename !== undefined) || []

    const fileUrl = fileUrls[0]

    webhookLogger.debug({ fileUrls: fileUrls }, 'List of html fileUrls in PR')

    // Safely use the validated webhook payload
    const entry = await createEntry({
      input: {
        approvedAt: pullRequest.approvedAt,
        sha: pullRequest.sha,
        title: pullRequest.title,
        description: pullRequest.description,
        pullRequestHtmlUrl: pullRequest.htmlUrl,
        pullRequestFilesUrl: pullRequest.filesUrl,
        challenge: { connect: { slug: pullRequest.challenge } },
        content: pullRequest.content,
        pullRequestFiles,
        fileUrls,
        fileUrl,
        user: pullRequest.user,
        username: pullRequest.username,
      },
    })

    const data = {
      entry: { title: entry.title, description: entry.description },
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        data,
      }),
    }
  } catch (error) {
    if (error instanceof WebhookVerificationError) {
      webhookLogger.warn('Unauthorized')

      return {
        statusCode: 401,
      }
    } else if (error instanceof InvalidPayloadError) {
      webhookLogger.warn(error.message)

      return {
        statusCode: 400,
        body: JSON.stringify({
          error: error.message,
        }),
      }
    } else {
      webhookLogger.error({ error }, error.message)

      return {
        statusCode: 500,
        body: JSON.stringify({
          error: error.message,
        }),
      }
    }
  }
}
