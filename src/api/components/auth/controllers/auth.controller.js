import httpStatus from 'http-status';
import moment from 'moment-timezone';
import {User} from '../../../db/models/User.js';
import {RefreshToken} from '../../../db/models/RefreshToken.js';
import {PasswordResetToken} from '../../../db/models/PasswordResetToken.js';
import {EmailVerificationToken} from '../../../db/models/EmailVerificationToken.js';
import {jwtExpirationInterval} from '../../../config/vars.js';
import APIError from '../../../utils/api-error.js';
import emailService from '../../email/services/email.service.js';
import { handleSequelizeErrors } from "../../../middlewares/sequelize.js";

// return formated object with tokens
const generateTokenResponse = (user, accessToken) => {
    const tokenType = 'Bearer';
    const refreshToken = RefreshToken.generate(user).token;
    const expiresIn = moment().add(jwtExpirationInterval, 'minutes');
    return {
        tokenType, accessToken, refreshToken, expiresIn,
    };
};

// return jwt token if registration was successful
export const register = async (req, res, next) => {
    try {
        const user = await (User.create(req.body));
        const userTransformed = user.transform();
        const token = generateTokenResponse(user, user.token());
        res.status(httpStatus.CREATED);
        return res.json({ token, user: userTransformed });
    } catch (error) {
        return next(handleSequelizeErrors(error));
    }
};

// return jwt token if valid email and password are provided
export const login = async (req, res, next) => {
    try {
        const { user, accessToken } = await User.findAndGenerateToken(req.body);
        const token = generateTokenResponse(user, accessToken);
        const userTransformed = user.transform();
        return res.json({ token, user: userTransformed });
    } catch (error) {
        return next(error);
    }
};

// return new jwt token if refresh token is valid
export const refresh = async (req, res, next) => {
    try {
        const { email, refreshToken } = req.body;
        const refreshObject = await RefreshToken.findOne({ where: { userEmail: email, token: refreshToken } });
        if (refreshObject) {
            await refreshObject.destroy();
        }
        const { user, accessToken } = await User.findAndGenerateToken({ email, refreshObject });
        const response = generateTokenResponse(user, accessToken);
        return res.json(response);
    } catch (error) {
        return next(error);
    }
};

// send password reset email
export const sendPasswordReset = async (req, res, next) => {
    try {
        const {email} = req.body;
        const user = await User.findOne({where: { email } });

        if (user) {
            const passwordResetObj = await PasswordResetToken.generate(user);
            await emailService.sendPasswordReset(passwordResetObj);
            res.status(httpStatus.OK);
            return res.json({message: 'Password reset email sent'});
        }
        throw new APIError({
            status: httpStatus.UNAUTHORIZED,
            message: 'No account found with that email',
        });
    } catch (error) {
        return next(error);
    }
};

// reset password
export const passwordReset = async (req, res, next) => {
    try {
        const { email, password, resetToken } = req.body;
        const resetPasswordToken = await PasswordResetToken.findOne({ where: { userEmail: email, token: resetToken } });
        if (resetPasswordToken) {
            await resetPasswordToken.destroy();
        }

        const err = new APIError({
            status: httpStatus.UNAUTHORIZED,
            isPublic: true,
        });
        if (!resetPasswordToken) {
            err.message = 'Cannot find matching password reset token';
            throw err;
        }
        if (moment().isAfter(resetPasswordToken.expires)) {
            err.message = 'Password reset token is expired';
            throw err;
        }

        const user = await User.findOne({ where: { email } });
        if (user) {
            user.password = password;
            await user.save();
            res.status(httpStatus.OK);
            return res.json({ message: 'Password Updated' });
        }
    } catch (error) {
        return next(error);
    }
};

// send email verification email
export const sendEmailVerification = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ where: { email } });
        if (user) {
            const emailVerificationToken = await EmailVerificationToken.generate(user);
            await emailService.sendVerificationEmail(emailVerificationToken);
            res.status(httpStatus.OK);
            return res.json({ message: 'Email verification sent' });
        }
        throw new APIError({
            status: httpStatus.UNAUTHORIZED,
            message: 'No account found with that email',
        });
    } catch (error) {
        return next(error);
    }
};

// verify email
export const emailVerification = async (req, res, next) => {
    try {
        const { email, verifyToken } = req.body;
        const emailVerificationToken = await EmailVerificationToken.findOne({ where: { userEmail: email, token: verifyToken } });
        if (emailVerificationToken) {
            await emailVerificationToken.destroy();
        }

        const err = new APIError({
            status: httpStatus.UNAUTHORIZED,
            isPublic: true,
        });
        if (!emailVerificationToken || moment().isAfter(emailVerificationToken.expires)) {
            throw new APIError({
                status: httpStatus.UNAUTHORIZED,
                message: emailVerificationToken ? 'Email verification token is expired' : 'Invalid email verification token',
                isPublic: true,
            });
        }

        const user = await User.findOne({ where: { email } });
        if (user) {
            user.emailVerified = true;
            await user.save();
            res.status(httpStatus.OK);
            return res.json({ message: 'Email Verified' });
        }
    } catch (error) {
        return next(error);
    }
};

export default {
    register,
    login,
    refresh,
    sendPasswordReset,
    passwordReset,
    sendEmailVerification,
    emailVerification,
};