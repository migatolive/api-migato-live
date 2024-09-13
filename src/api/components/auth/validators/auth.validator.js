import * as Yup from 'yup';

export const register = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .min(6)
        .max(128)
        .required(),
});

export const login = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .max(128)
        .required(),
});

export const refresh = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    refreshToken: Yup.string()
        .required(),
});

export const sendPasswordReset = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
});

export const passwordReset = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .min(6)
        .max(128)
        .required(),
    passwordResetToken: Yup.string()
        .required(),
});

export const sendEmailVerification = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
});

export const emailVerification = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    emailVerificationToken: Yup.string()
        .required(),
});