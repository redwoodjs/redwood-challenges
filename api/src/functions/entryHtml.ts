import type { APIGatewayEvent, Context } from 'aws-lambda'
import { logger } from 'src/lib/logger'
import { decodedEntryContent } from 'src/services/entries/entries'

/**
 * Return as html the decoded bse64 content for an entry
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info('Invoked entryHtml function')
  try {
    const content = await decodedEntryContent({
      id: event.queryStringParameters.id,
    })

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      },
      body: content,
    }
  } catch (error) {
    return {
      statusCode: 404,
    }
  }
}
