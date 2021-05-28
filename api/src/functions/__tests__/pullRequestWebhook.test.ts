import type { APIGatewayEvent } from 'aws-lambda'

import { signPayload } from '@redwoodjs/api/webhooks'
import { handler } from '../pullRequestWebhook'
import { db } from 'src/lib/db'

import {
  buildEvent,
  context,
  challenges,
  realWorldMergedPullRequest,
} from './__fixtures__'

const setup = async () => {
  await db.challenge.createMany({ data: challenges })
}

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

describe('pullRequestWebhook', () => {
  describe('when given a valid payload and secret', () => {
    it('verifies the event payload', async () => {
      await setup()

      const event = mockEvent({ payload })

      const response = await handler(event as APIGatewayEvent, context)

      expect(response.statusCode).toEqual(201)
    })

    it('creates an entry', async () => {
      await setup()

      const event = mockEvent({ payload })

      const _response = await handler(event as APIGatewayEvent, context)

      const entryCount = await db.entry.count()

      expect(entryCount).toEqual(1)
    })

    it('creates an entry associated to the challenge set in the label', async () => {
      await setup()

      const event = mockEvent({ payload })

      const _response = await handler(event as APIGatewayEvent, context)

      const challenge = await db.entry.findFirst({ take: 1 }).challenge()

      expect(challenge.slug).toEqual('splash-page')
    })

    it('creates an entry with the payload content', async () => {
      await setup()

      const event = mockEvent({ payload })

      const _response = await handler(event as APIGatewayEvent, context)

      const entry = await db.entry.findFirst({ take: 1 })

      expect(entry.content).toEqual(payload.pull_request)
    })
  })

  describe('when there are no challenges', () => {
    it('cannot save the entry and returns a server error', async () => {
      const event = mockEvent({ payload })

      const response = await handler(event as APIGatewayEvent, context)

      expect(response).toHaveProperty('statusCode', 500)
    })
  })

  describe('when given an invalid secret', () => {
    it('is unauthorized', async () => {
      await setup()

      const event = mockEvent({ payload, invalidSecret: true })

      const response = await handler(event as APIGatewayEvent, context)

      expect(response).toEqual({
        statusCode: 401,
      })
    })
  })
})
