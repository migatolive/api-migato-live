import nodemailer from 'nodemailer';
import pug from 'pug';
import path from 'path';
import {fileURLToPath} from 'url';
import httpStatus from "http-status";
import APIError from '../../../utils/api-error.js';
import {frontend_url, mailgun} from '../../../config/vars.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transporter = nodemailer.createTransport({
    service: 'Mailgun',
    port: mailgun.port,
    auth: {
        user: mailgun.login,
        pass: mailgun.password,
    },
    secure: false,
});

transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

export const sendPasswordReset = async (passwordResetObject, user) => {
    try {
        const templatePath = path.join(__dirname, '../templates', 'passwordReset.pug');
        const html = pug.renderFile(templatePath, {
            resetLink: `${frontend_url}/reset-password?token=${passwordResetObject.token}`,
        });
        const mailOptions = {
            to: user.email,
            from: mailgun.login,
            subject: 'Password reset',
            html,
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new APIError({
            message: 'Error sending email',
            status: httpStatus.INTERNAL_SERVER_ERROR,
            stack: error.stack,
        });
    }
};

export const sendVerificationEmail = async (verificationObject, user) => {
    try {
        const templatePath = path.join(__dirname, '../templates', 'emailVerification.pug');
        const html = pug.renderFile(templatePath, {
            verificationLink: `${frontend_url}/verify-email?token=${encodeURIComponent(verificationObject.token)}`,
        });
        const mailOptions = {
            to: user.email,
            from: mailgun.login,
            subject: 'Email verification',
            html,
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new APIError({
            message: 'Error sending email',
            status: httpStatus.INTERNAL_SERVER_ERROR,
            stack: error.stack,
        });
    }
};

export default {
    sendPasswordReset,
    sendVerificationEmail,
};