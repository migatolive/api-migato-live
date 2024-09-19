import httpStatus from 'http-status';
import {User} from '../../../db/models/User.js';
import APIError from '../../../utils/api-error.js';

// Obtener el perfil del usuario autenticado
export const getProfile = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.id); // Usuario autenticado
        if (!user) {
            throw new APIError({
                status: httpStatus.NOT_FOUND,
                message: 'User not found',
            });
        }
        res.status(httpStatus.OK).json(user);
    } catch (error) {
        next(error);
    }
};

// Actualizar el perfil del usuario
export const updateProfile = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.id);
        if (!user) {
            throw new APIError({
                status: httpStatus.NOT_FOUND,
                message: 'User not found',
            });
        }

        const updatedUser = await user.update(req.body);
        res.status(httpStatus.OK).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

// Obtener un usuario por su ID (para administradores)
export const getUserById = async (req, res, next) => {
    try {
        const user = await User.get(req.params.userId);
        res.status(httpStatus.OK).json(user);
    } catch (error) {
        next(error);
    }
};

// Actualizar un usuario (solo administradores)
export const updateUser = async (req, res, next) => {
    try {
        const user = await User.get(req.params.userId);
        const updatedUser = await user.update(req.body);
        res.status(httpStatus.OK).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

// Eliminar un usuario (solo administradores)
export const deleteUser = async (req, res, next) => {
    try {
        const user = await User.get(req.params.userId);
        await user.destroy();
        res.status(httpStatus.OK).json({message: 'User deleted successfully'});
    } catch (error) {
        next(error);
    }
};

export default {
    getProfile,
    updateProfile,
    getUserById,
    updateUser,
    deleteUser,
};