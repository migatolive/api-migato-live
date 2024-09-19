import passport from 'passport';
import httpStatus from 'http-status';
import APIError from '../utils/api-error.js';
import { promisify } from 'util'; // Para usar logIn como async

// Definimos los roles
export const LOGGED_USER = 'user';
export const ADMIN = 'admin';

const handleJWT = (req, res, next, roles) => async (err, user, info) => {
    const error = err || info;
    const logIn = promisify(req.logIn);

    try {
        if (error || !user) {
            throw new APIError({
                status: httpStatus.UNAUTHORIZED,
                message: error ? error.message : 'Unauthorized access.',
                stack: error ? error.stack : undefined,
            });
        }

        await logIn(user, { session: false });
        if (!roles.includes(user.role)) {
            throw new APIError({
                status: httpStatus.FORBIDDEN,
                message: 'You do not have the right role to access this resource.',
            });
        }
        // Verificar si el usuario tiene el rol adecuado para acceder al recurso
        if (!roles.includes(user.role)) {
            throw new APIError({
                status: httpStatus.FORBIDDEN,
                message: 'You do not have the right role to access this resource.',
            });
        }
        // Permitir al usuario acceder a su propio perfil (si es el dueño del perfil o es admin)
        if (roles.includes(LOGGED_USER) && req.params.userId && req.params.userId !== user.id.toString() && user.role !== ADMIN) {
            throw new APIError({
                status: httpStatus.FORBIDDEN,
                message: 'You are not allowed to access this resource.',
            });
        }
        // debug
        console.log('User role:', user.role);
        console.log('Roles permitidos:', roles);
        console.log('User ID:', user.id);
        console.log('Params userId:', req.params.userId);

        req.user = user;
        next();
    } catch (e) {
        return next(e);
    }
};

// Exportamos la función authorize junto con los roles
export const authorize = (roles = [ADMIN, LOGGED_USER]) => (req, res, next) =>
    passport.authenticate('jwt', { session: false }, handleJWT(req, res, next, roles))(req, res, next);