import {Router} from 'express';
import { authorize, LOGGED_USER, ADMIN } from '../../../middlewares/auth.js';
import UserController from '../controllers/user.controller.js';

const router = Router();

router.route('/profile')
    .get(authorize([LOGGED_USER, ADMIN]), UserController.getProfile)
    .put(authorize([LOGGED_USER, ADMIN]), UserController.updateProfile);

router.route('/:userId')
    .get(authorize([ADMIN]), UserController.getUserById)
    .put(authorize([ADMIN]), UserController.updateUser)
    .delete(authorize([ADMIN]), UserController.deleteUser);

export default router;