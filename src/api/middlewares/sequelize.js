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
