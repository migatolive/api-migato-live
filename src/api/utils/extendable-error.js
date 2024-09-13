/**
 * ExtendableError class that extends the built-in Error class.
 *
 * @class ExtendableError
 * @extends {Error}
 */
class ExtendableError extends Error {
  /**
   * Creates an instance of ExtendableError.
   *
   * @param {string} message - The error message.
   * @param {Array} [errors] - Additional error details.
   * @param {number} [status] - HTTP status code.
   * @param {boolean} [isPublic] - Whether the error is public.
   * @param {string} [stack] - The stack trace.
   */
  constructor(message, errors, status, isPublic, stack) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errors = errors;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true;
    this.stack = stack;
  }
}

export default ExtendableError;