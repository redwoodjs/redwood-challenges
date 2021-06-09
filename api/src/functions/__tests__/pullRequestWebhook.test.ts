import type { APIGatewayEvent, APIGatewayProxyEventHeaders } from 'aws-lambda'

import nock from 'nock'

import { signPayload } from '@redwoodjs/api/webhooks'
import { handler } from '../pullRequestWebhook'

import { db } from '../../lib/db'
import { logger } from '../../lib/logger'

import { buildEvent } from '../__fixtures__/buildEvent'
import { buildContext } from '../__fixtures__/buildContext'
import { validMergedPullRequest } from '../__fixtures__/validMergedPullRequest'
import { encodedGitHubFileContent } from '../__fixtures__/encodedGitHubFileContent'

const mockPullRequestWebhook = ({ payload, invalidSecret = false }) => {
  const signature = signPayload('sha256Verifier', {
    payload: JSON.stringify(payload),
    secret: invalidSecret
      ? 'invalid'
      : process.env.GITHUB_PULL_REQUEST_WEBHOOK_SECRET,
  })

  const headers = {} as APIGatewayProxyEventHeaders
  headers['x-github-event'] = 'pull_request'

  const event = buildEvent({
    payload: JSON.stringify(payload),
    signature,
    signatureHeader: process.env.GITHUB_WEBHOOK_SIGNATURE_HEADER,
    headers,
  })

  const context = buildContext()

  return { event, context }
}

describe('valid scenario pullRequestWebhook', () => {
  beforeAll(() => {
    nock('https://github.com')
      .get('/dthyresson/redwood-webhook-test/pull/4/files')
      .reply(200, encodedGitHubFileContent)
  })

  scenario('verifies the event payload', async () => {
    logger.debug(
      { id: validMergedPullRequest.pull_request.id },
      'realWorldMergedPullRequest'
    )

    const { event, context } = mockPullRequestWebhook({
      payload: validMergedPullRequest,
    })

    const response = await handler(event as APIGatewayEvent, context)

    expect(response.statusCode).toEqual(201)
  })

  scenario('creates an entry', async () => {
    const { event, context } = mockPullRequestWebhook({
      payload: validMergedPullRequest,
    })

    const _response = await handler(event as APIGatewayEvent, context)

    const entryCount = await db.entry.count()

    expect(entryCount).toEqual(1)
  })

  scenario(
    'creates an entry associated to the challenge set in the label',
    async () => {
      const { event, context } = mockPullRequestWebhook({
        payload: validMergedPullRequest,
      })

      const _response = await handler(event as APIGatewayEvent, context)

      const challenge = await db.entry.findFirst({ take: 1 }).challenge()

      expect(challenge.slug).toEqual('splash-page')
    }
  )

  scenario('creates an entry with the payload content', async () => {
    const { event, context } = mockPullRequestWebhook({
      payload: validMergedPullRequest,
    })

    const _response = await handler(event as APIGatewayEvent, context)

    const entry = await db.entry.findFirst({ take: 1 })

    expect(entry.content).toEqual(encodedGitHubFileContent.content)
  })
})

describe('when there are no challenges', () => {
  scenario(
    'mismatchedChallenges',
    'cannot save the entry and returns a server error',
    async () => {
      const { event, context } = mockPullRequestWebhook({
        payload: validMergedPullRequest,
      })

      const response = await handler(event as APIGatewayEvent, context)

      expect(response).toHaveProperty('statusCode', 500)
    }
  )
})

describe('when given an invalid secret', () => {
  scenario('is unauthorized', async () => {
    const { event, context } = mockPullRequestWebhook({
      payload: validMergedPullRequest,
      invalidSecret: true,
    })

    const response = await handler(event as APIGatewayEvent, context)

    expect(response).toEqual({
      statusCode: 401,
    })
  })
})
