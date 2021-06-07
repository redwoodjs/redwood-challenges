import type { APIGatewayEvent } from 'aws-lambda'

import nock from 'nock'

import { signPayload } from '@redwoodjs/api/webhooks'
import { handler } from '../pullRequestWebhook'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

import {
  buildEvent,
  context,
  realWorldMergedPullRequest,
  splashDemoThursday,
} from './__fixtures__/buildEvent'

const mockEvent = ({ payload, invalidSecret = false }) => {
  const signature = signPayload('sha256Verifier', {
    payload: JSON.stringify(payload),
    secret: invalidSecret
      ? 'invalid'
      : process.env.GITHUB_PULL_REQUEST_WEBHOOK_SECRET,
  })

  return buildEvent({
    payload: JSON.stringify(payload),
    signature,
    signatureHeader: process.env.GITHUB_WEBHOOK_SIGNATURE_HEADER,
  })
}

const payload = realWorldMergedPullRequest

describe('valid scenario pullRequestWebhook', () => {
  beforeAll(() => {
    nock('https://github.com')
      .get('/dthyresson/redwood-webhook-test/pull/4/files')
      .reply(200, splashDemoThursday)
  })

  scenario('verifies the event payload', async () => {
    logger.debug(
      { id: realWorldMergedPullRequest.pull_request.id },
      'realWorldMergedPullRequest'
    )

    const event = mockEvent({ payload })

    const response = await handler(event as APIGatewayEvent, context)

    expect(response.statusCode).toEqual(201)
  })

  scenario('creates an entry', async () => {
    const event = mockEvent({ payload })

    const _response = await handler(event as APIGatewayEvent, context)

    const entryCount = await db.entry.count()

    expect(entryCount).toEqual(1)
  })

  scenario(
    'creates an entry associated to the challenge set in the label',
    async () => {
      const event = mockEvent({ payload })

      const _response = await handler(event as APIGatewayEvent, context)

      const challenge = await db.entry.findFirst({ take: 1 }).challenge()

      expect(challenge.slug).toEqual('splash-page')
    }
  )

  scenario('creates an entry with the payload content', async () => {
    const event = mockEvent({ payload })

    const _response = await handler(event as APIGatewayEvent, context)

    const entry = await db.entry.findFirst({ take: 1 })

    expect(entry.content).toEqual(splashDemoThursday.content)
  })
})

describe('when there are no challenges', () => {
  scenario(
    'mismatchedChallenges',
    'cannot save the entry and returns a server error',
    async () => {
      const event = mockEvent({ payload })

      const response = await handler(event as APIGatewayEvent, context)

      expect(response).toHaveProperty('statusCode', 500)
    }
  )
})

describe('when given an invalid secret', () => {
  scenario('is unauthorized', async () => {
    const event = mockEvent({ payload, invalidSecret: true })

    const response = await handler(event as APIGatewayEvent, context)

    expect(response).toEqual({
      statusCode: 401,
    })
  })
})
