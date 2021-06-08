import type { Context } from 'aws-lambda'

/**
 *  @see: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html
 **/
export const buildContext = (): Context => {
  const context = {} as Context

  return context
}
