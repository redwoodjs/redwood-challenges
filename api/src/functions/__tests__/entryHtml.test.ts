import { handler } from '../entryHtml'

import { buildEvent } from './__fixtures__/buildEvent'

describe('EntryHTML function', () => {
  scenario('Returns decoded content from an Entry', async () => {
    const entryHtmlEvent = buildEvent({
      queryStringParameters: {
        id: 'find-my-by-id-one',
      },
    })

    const result = await handler(entryHtmlEvent, null)
    expect(result.statusCode).toBe(200)
    expect(result.body).toEqual(expect.stringContaining('Welcome to RedwoodJS'))
  })

  scenario('Returns 404 for an entry that cannot be found', async () => {
    const entryHtmlEvent = buildEvent({
      queryStringParameters: {
        id: 'baddy-mcbadface',
      },
    })

    const result = await handler(entryHtmlEvent, null)
    expect(result.statusCode).toBe(404)
  })
})
