/**
 * Class representing a InvalidPayloadError
 * @extends Error
 */
export class InvalidPayloadError extends Error {
  /**
   * Create a WebhookError.
   * @param {string} message - The error message
   * */
  constructor(message: string) {
    super(message)
  }
}
