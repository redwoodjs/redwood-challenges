import type { APIGatewayEvent, Context } from 'aws-lambda'
import got from 'got'

import { InvalidPayloadError } from 'src/lib/errors'
import { logger } from 'src/lib/logger'
import {
  verifyEvent,
  VerifyOptions,
  WebhookVerificationError,
} from '@redwoodjs/api/webhooks'

import { upsertEntry } from 'src/services/entries/entries'
import { parse } from 'src/lib/github/pullRequestParser'

/**
 * Verifies the GitHub webhook based on the signature header and secret
 **/
const verify = (event: APIGatewayEvent) => {
  const options = {
    signatureHeader: process.env.GITHUB_WEBHOOK_SIGNATURE_HEADER,
  } as VerifyOptions

  verifyEvent('sha256Verifier', {
    event,
    secret: process.env.GITHUB_PULL_REQUEST_WEBHOOK_SECRET,
    options,
  })
}

/**
 * Checks is the GitHub webhook is a ping from saving the Webhook settings.
 * Returns a 200 if it is.
 *
 **/
const isPing = (event: APIGatewayEvent) => {
  if (event.headers['x-github-event'] === 'ping') {
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
}

/**
 * Checks if the GitHub webhook is a pull request bade on the event headers.
 **/
const isPullRequest = (event: APIGatewayEvent) => {
  if (event.headers['x-github-event'] !== 'pull_request') {
    throw new InvalidPayloadError('Webhook is not a GitHub Pull Request event.')
  }
}

/**
 * Extracts Pull Request data needed to persist an Entry associated to a Challenge from the payload.
 **/
const parsePullRequest = (event: APIGatewayEvent) => {
  isPullRequest(event)

  const payload = JSON.parse(event.body) || {}
  const pullRequest = parse({ payload })

  if (!pullRequest.isValid) {
    throw new InvalidPayloadError(
      'Payload is invalid. Either it was not a proper GitHub Pull Request, or the PR has not been merged.'
    )
  }

  return pullRequest
}

/**
 * Given the PR, uses the url to the GitHib api to fetch the files in the merged PR and
 * the files making up the merged commits are inspected and filenames
 * with the `.html` extension are extracted.
 *
 * The first of these filenames represents the entry html file and a url to the
 * raw content is stored with the Entry.
 **/
const parsePullRequestFiles = async (pullRequest) => {
  // Handle Response code 403 (rate limit exceeded) gracefully
  // by using a Personal Access OAuth token
  const response = await got(pullRequest.filesUrl, {
    headers: { Authorization: `token ${process.env.GITHUB_API_TOKEN}` },
  })
  const pullRequestFiles = JSON.parse(response.body)

  const fileUrls =
    pullRequestFiles
      ?.map((info) =>
        info.filename.endsWith('.html') ? info.raw_url : undefined
      )
      .filter((filename) => filename !== undefined) || []

  return { pullRequestFiles, fileUrls, fileUrl: fileUrls[0] }
}

/**
 * The pullRequestWebhook handler accepts an incoming Pull Request webhook from GitHub.
 *
 * It verifies the webhook via the signature, checks if the GitHib event is a pull request,
 * parses the payload to extract the relevant PR info needed to persist an Entry.
 *
 * Valid PR's must be closed and merged to be persisted.
 *
 * Entries are associated with the Challenge using the PR's labels. The first label prefixed with
 * `challenge:` determines the challenge.
 *
 * Given the PR, the files making up the merged commits are inspected and filenames
 * with the `.html` extension are extracted.
 *
 * The first of these filenames represents the entry html file and a url to the
 * raw content is stored with the Entry.
 *
 * Note: GitHub may send a `ping` webhook event on editing the Webhook settings. In this case
 * the payload is not parsed and a 204 No Content status returns.
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

  try {
    verify(event)
    isPing(event)

    const pullRequest = parsePullRequest(event)

    const { pullRequestFiles, fileUrls, fileUrl } = await parsePullRequestFiles(
      pullRequest
    )

    webhookLogger.debug({ fileUrls: fileUrls }, 'List of html fileUrls in PR')

    // Safely use the validated webhook payload
    const entry = await upsertEntry({
      input: {
        approvedAt: pullRequest.approvedAt,
        uid: pullRequest.uid,
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
      statusCode: 201,
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
