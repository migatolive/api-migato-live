import { ValidationError } from 'sequelize';
import httpStatus from "http-status";
import APIError from '../utils/api-error.js';

// Error converter
export function errorConverter(err, req, res, next) {
    let convertedError = err;

    // Verificar si es un error de tipo Sequelize que no es una instancia de APIError
    if (!(err instanceof APIError)) {
        if (err instanceof ValidationError) {
            // Para validaciones generales
            convertedError = new APIError({
                message: 'Validation Error',
                errors: err.errors.map(e => ({
                    field: e.path,
                    location: 'body',
                    messages: [e.message],
                })),
                status: httpStatus.BAD_REQUEST, // 400 Bad Request
                isPublic: true,
            });
        } else if (err instanceof UniqueConstraintError) {
            // Por si intentan crear un registro que ya existe
            convertedError = new APIError({
                message: 'Conflict Error',
                errors: err.errors.map(e => ({
                    field: e.path,
                    location: 'body',
                    messages: [`"${e.value}" already exists`],
                })),
                status: httpStatus.CONFLICT, // 409 Conflict
                isPublic: true,
            });
        } else {
            // Cualquier otro error no manejado especificamente
            convertedError = new APIError({
                message: err.message,
                status: err.status || httpStatus.INTERNAL_SERVER_ERROR,
                stack: err.stack,
            });
        }
    }

    return errorHandler(convertedError, req, res);
}

// Error logger
export function errorLogger(err, req, res, next) {
    console.error(`Error message: ${err.message}`);
    console.error(`Error stack: ${err.stack}`);
    console.error(`Request body: ${JSON.stringify(req.body)}`);
    next(err); // Pasar el error al siguiente middleware
}

// Error handler
export function errorHandler(err, req, res, next) {
    const response = {
        code: err.status,
        message: err.message || httpStatus[err.status],
        errors: err.errors,
        stack: err.stack,
    };

    res.status(err.status);
    res.json(response);
}

// Error 404
export function errorNotFound(req, res, next) {
    const err = new APIError({
        message: 'Not found',
        status: httpStatus.NOT_FOUND,
    });
    return errorHandler(err, req, res);
}

export default {
    errorLogger,
    errorHandler,
    errorConverter,
    errorNotFound
}