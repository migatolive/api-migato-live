import {DataTypes, UniqueConstraintError} from 'sequelize';
import bcrypt from 'bcryptjs';
import moment from 'moment-timezone';
import httpStatus from 'http-status';
import APIError from '../../utils/api-error.js';
import {sequelize} from '../../config/database.js';

const roles = {
    user: 'user',
    admin: 'admin',
}

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM,
        values: Object.values(roles),
        defaultValue: Object.values(roles)[0],
    },
    picture: {
        type: DataTypes.STRING,
        trim: true,
    },
}, {
    timestamps: true,
    hooks: {
        beforeCreate: async (user) => {
            user.password = await bcrypt.hash(user.password, 10);
        },
    },
});

// find user by email and tries to generate a JWT token
User.findAndGenerateToken = async function(options) {
    const { email, password, refreshObject } = options;
    if (!email) {
        throw new APIError({
            message: 'An email is required to generate a token'
        });
    }

    const user = await User.findOne({ where: { email } });
    const err = {
        status: httpStatus.UNAUTHORIZED,
        isPublic: true,
    };
    if (password) {
        if (user && await user.passwordMatches(password)) {
            return { user, accessToken: user.token() };
        }
        err.message = 'Incorrect email or password';
    } else if (refreshObject && refreshObject.userEmail === email) {
        if (moment(refreshObject.expires).isBefore()) {
            err.message = 'Invalid refresh token.';
        } else {
            return { user, accessToken: user.token() };
        }
    } else {
        err.message = 'Incorrect email or refreshToken';
    }
    throw new APIError(err);
};

User.checkDuplicateEmail = async (error) => {
    if (error instanceof UniqueConstraintError) {
        return new APIError({
            message: 'Validation Error',
            errors: [{
                field: 'email',
                location: 'body',
                messages: ['"email" already exists'],
            }],
            status: httpStatus.CONFLICT,
            isPublic: true,
            stack: error.stack,
        });
    }
    return error;
};