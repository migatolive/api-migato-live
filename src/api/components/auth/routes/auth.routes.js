import {Router} from 'express';
import controller from '../controllers/auth.controller.js';
import {
    emailVerification,
    login,
    passwordReset,
    refresh,
    register,
    sendEmailVerification,
    sendPasswordReset
} from '../validators/auth.validator.js';

const router = Router();

const validate = (schema) => async (req, res, next) => {
    try {
        await schema.validate({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        return next();
    } catch (error) {
        return res.status(400).json({ error: error.errors[0] });
    }
};

router.route('/login')
    .post(validate(login), controller.login);

router.route('/register')
    .post(validate(register), controller.register);

router.route('/refresh-token')
    .post(validate(refresh), controller.refresh);

router.route('/send-password-reset')
    .post(validate(sendPasswordReset), controller.sendPasswordReset);

router.route('/password-reset')
    .post(validate(passwordReset), controller.passwordReset);

router.route('/send-email-verification')
    .post(validate(sendEmailVerification), controller.sendEmailVerification);

router.route('/email-verification')
    .post(validate(emailVerification), controller.emailVerification);

export default router;