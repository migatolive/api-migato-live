import {DataTypes} from 'sequelize';
import {sequelize} from '../../config/database.js';
import {User} from './User.js';
import crypto from 'crypto';
import moment from 'moment-timezone';

export const RefreshToken = sequelize.define('RefreshToken', {
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
        beforeCreate: async (refreshToken) => {
            refreshToken.token = `${refreshToken.userId}.${crypto.randomBytes(20).toString('hex')}`;
            refreshToken.expires = moment().add(30, 'days');
        },
    },
});

RefreshToken.belongsTo(User, { foreignKey: 'userId' });

RefreshToken.generate = async function(user) {
    const userId = user.id;
    const existingRefreshToken = await RefreshToken.findOne({ where: { userId } });

    if (existingRefreshToken) {
        await RefreshToken.destroy({ where: { userId } });
    }

    return await RefreshToken.create({ userId });
};