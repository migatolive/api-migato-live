import {Router} from 'express';
// import contactRoutes from '../components/contact/routes/contact.routes.js';
import authRoutes from '../components/auth/routes/auth.routes.js';
import userRoutes from '../components/user/routes/user.routes.js';
import bookRoutes from '../components/book/routes/book.routes.js';

const router = Router();

router.use('/v1/auth', authRoutes);
router.use('/v1/book', bookRoutes);
router.use('/v1/user', userRoutes);

export default router;