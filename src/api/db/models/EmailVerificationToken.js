import {DataTypes} from 'sequelize';
import {sequelize} from '../../config/database.js';
import {User} from './User.js';
import crypto from 'crypto';
import moment from 'moment-timezone';

export const EmailVerificationToken = sequelize.define('EmailVerificationToken', {
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
        beforeValidate: async (emailVerificationToken) => {
            emailVerificationToken.token = `${emailVerificationToken.userId}.${crypto.randomBytes(20).toString('hex')}`;
            emailVerificationToken.expires = moment().add(24, 'hours').toDate();
        },
    },
});

EmailVerificationToken.belongsTo(User, { foreignKey: 'userId' });

EmailVerificationToken.generate = async function(user) {
    const userId = user.id;
    const existingEmailVerificationToken = await EmailVerificationToken.findOne({ where: { userId } });

    if (existingEmailVerificationToken) {
        await EmailVerificationToken.destroy({ where: { userId } });
    }

    return await EmailVerificationToken.create({ userId });
}