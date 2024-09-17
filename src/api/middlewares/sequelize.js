import { UniqueConstraintError } from 'sequelize';
import httpStatus from "http-status";
import APIError from '../utils/api-error.js';

export const handleSequelizeErrors = (error) => {
    if (error instanceof UniqueConstraintError) {
        const duplicateField = error.errors[0].path;
        throw new APIError({
            message: 'Validation Error',
            errors: [{
                field: duplicateField,
                location: 'body',
                messages: [`"${duplicateField}" already exists`],
            }],
            status: httpStatus.CONFLICT,
            isPublic: true,
        });
    }
    return error;
};

export const validate = (schema) => async (req, res, next) => {
    try {
        const data = await schema.validate(req.body, { abortEarly: false });
        console.log('Validation successful:', data);
        next();
    } catch (error) {
        console.error('Validation error:', error);
        const apiError = new APIError({
            message: 'Validation error',
            status: 422,
            isPublic: true,
            stack: error.stack,
            errorCode: 'validation_error',
            errors: error.errors
        });
        next(apiError);
    }
};