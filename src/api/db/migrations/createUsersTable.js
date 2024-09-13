import {DataTypes} from 'sequelize';

const roles = {
    user: 'user',
    admin: 'admin',
};

export const up = async ({ context: queryInterface }) => {
    await queryInterface.createTable('Users', {
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
            defaultValue: roles.user,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    });
};

export const down = async ({ context: queryInterface }) => {
    await queryInterface.dropTable('Users');
};