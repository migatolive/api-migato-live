import dotenv from 'dotenv';

dotenv.config();

export const env = process.env.NODE_ENV;
export const port = process.env.PORT;
export const frontend_url = process.env.FRONTEND_URL;
export const jwtSecret = process.env.JWT_SECRET;
export const jwtExpirationInterval = process.env.JWT_EXPIRATION_MINUTES;
export const logs = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
export const db = {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
};
export const mailgun = {
    login: process.env.MAILGUN_SMTP_LOGIN,
    password: process.env.MAILGUN_SMTP_PASSWORD,
    port: 587,
    host: 'smtp.mailgun.org',
};