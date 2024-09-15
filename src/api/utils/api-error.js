import httpStatus from 'http-status';
import ExtendableError from './extendable-error.js';

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {Object} options - The error options.
   * @param {string} options.message - The error message.
   * @param {Array} [options.errors] - The array of errors.
   * @param {string} [options.stack] - The stack trace.
   * @param {number} [options.status=httpStatus.INTERNAL_SERVER_ERROR] - The HTTP status code.
   * @param {boolean} [options.isPublic=false] - Whether the error is public.
   * @param {string} [options.errorCode] - The custom error code.
   */
  constructor({
    message,
    errors,
    stack,
    status = httpStatus.INTERNAL_SERVER_ERROR,
    isPublic = false,
    errorCode,
  }) {
    super(
      message,
      errors,
      status,
      isPublic,
      stack,
    );
    this.errorCode = errorCode;
  }
}

export default APIError;