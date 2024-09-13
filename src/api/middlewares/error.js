import httpStatus from 'http-status';
import APIError from '../utils/api-error.js';
import { env } from '../config/vars.js';
import { ValidationError } from 'yup';

export const handler = (err, req, res, next) => {
    const statusCode = err.status || httpStatus.INTERNAL_SERVER_ERROR;
    const response = {
        code: statusCode,
        message: err.message || httpStatus[statusCode],
        errors: err.errors,
        stack: err.stack,
    };

    if (env !== 'development') {
        delete response.stack;
    }

    res.status(statusCode);
    res.json(response);
};

export const converter = (err, req, res, next) => {
    let convertedError = err;

    if (err instanceof ValidationError) {
        convertedError = new APIError({
            message: 'Validation Error',
            errors: err.errors,
            status: httpStatus.BAD_REQUEST,
            stack: err.stack,
        });
    } else if (!(err instanceof APIError)) {
        convertedError = new APIError({
            message: err.message,
            status: err.status || httpStatus.INTERNAL_SERVER_ERROR,
            stack: err.stack,
        });
    }

    return handler(convertedError, req, res);
};

export const notFound = (req, res, next) => {
    const err = new APIError({
        message: 'Not found',
        status: httpStatus.NOT_FOUND,
    });
    return handler(err, req, res);
};

export default { handler, converter, notFound };