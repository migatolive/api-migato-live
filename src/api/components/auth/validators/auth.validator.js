import * as Yup from 'yup';
import APIError from '../../../utils/api-error.js';

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

export const Schemas = {
    register: Yup.object().shape({
        email: Yup.string()
            .email()
            .required()
            .transform(value => value.toLowerCase()),
        password: Yup.string()
            .min(6)
            .max(128)
            .required(),
    }),
    login: Yup.object().shape({
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .max(128)
            .required(),
    }),
    refresh: Yup.object().shape({
        email: Yup.string()
            .email()
            .required(),
        refreshToken: Yup.string()
            .required(),
    }),
    sendPasswordReset: Yup.object().shape({
        email: Yup.string()
            .email()
            .required(),
    }),
    passwordReset: Yup.object().shape({
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .min(6)
            .max(128)
            .required(),
        resetToken: Yup.string()
            .required(),
    }),
    sendEmailVerification: Yup.object().shape({
        email: Yup.string()
            .email()
            .required(),
    }),
    emailVerification: Yup.object().shape({
        email: Yup.string()
            .email()
            .required(),
        verifyToken: Yup.string()
            .required(),
    }),
};