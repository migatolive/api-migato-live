import {DataTypes} from 'sequelize';
import {sequelize} from '../../config/database.js';
import {User} from './User.js';
import crypto from 'crypto';
import moment from 'moment-timezone';

export const PasswordResetToken = sequelize.define('PasswordResetToken', {
    token: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    expires: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    timestamps: true,
    hooks: {
        beforeCreate: async (passwordResetToken) => {
            passwordResetToken.token = `${passwordResetToken.userId}.${crypto.randomBytes(20).toString('hex')}`;
            passwordResetToken.expires = moment().add(24, 'hours');
        },
    },
});

PasswordResetToken.belongsTo(User, { foreignKey: 'userId' });

PasswordResetToken.generate = async function(user) {
    const userId = user.id;
    const existingPasswordResetToken = await PasswordResetToken.findOne({ where: { userId } });

    if (existingPasswordResetToken) {
        await PasswordResetToken.destroy({ where: { userId } });
    }

    return await PasswordResetToken.create({ userId });
}