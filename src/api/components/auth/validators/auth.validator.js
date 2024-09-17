import * as Yup from 'yup';

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