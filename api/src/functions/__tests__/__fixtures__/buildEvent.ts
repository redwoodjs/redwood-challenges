import type {
  APIGatewayProxyEvent,
  APIGatewayProxyEventHeaders,
} from 'aws-lambda'

interface BuildEventParams extends Partial<APIGatewayProxyEvent> {
  payload?: string
  signature?: string
  signatureHeader?: string
  headers?: APIGatewayProxyEventHeaders
}
// See: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/aws-lambda/trigger/api-gateway-proxy.d.ts
export const buildEvent = ({
  payload,
  signature,
  signatureHeader,
  queryStringParameters = null,
  httpMethod = 'GET',
  headers = {},
  path = '',
  isBase64Encoded = false,
  ...others
}: BuildEventParams): APIGatewayProxyEvent => {
  if (signature && signatureHeader) {
    headers[signatureHeader.toLocaleLowerCase()] = signature
  }

  const body = isBase64Encoded
    ? Buffer.from(payload || '').toString('base64')
    : payload

  return {
    body,
    headers,
    multiValueHeaders: {},
    isBase64Encoded,
    path,
    pathParameters: null,
    stageVariables: null,
    httpMethod,
    queryStringParameters,
    requestContext: null,
    resource: null,
    multiValueQueryStringParameters: null,
    ...others,
  }
}
