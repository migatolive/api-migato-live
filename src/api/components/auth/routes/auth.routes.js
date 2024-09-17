import {Router} from 'express';
import controller from '../controllers/auth.controller.js';
import {
    validate,
    Schemas
} from '../validators/auth.validator.js';

const router = Router();

router.route('/login')
    .post(validate(Schemas.login), controller.login);

router.route('/register')
    .post(validate(Schemas.register), controller.register);

router.route('/refresh-token')
    .post(validate(Schemas.refresh), controller.refresh);

router.route('/send-password-reset')
    .post(validate(Schemas.sendPasswordReset), controller.sendPasswordReset);

router.route('/password-reset')
    .post(validate(Schemas.passwordReset), controller.passwordReset);

router.route('/send-email-verification')
    .post(validate(Schemas.sendEmailVerification), controller.sendEmailVerification);

router.route('/email-verification')
    .post(validate(Schemas.emailVerification), controller.emailVerification);

export default router;