import {DataTypes} from 'sequelize';

export const up = async ({ context: queryInterface }) => {
    await queryInterface.createTable('RefreshTokens', {
        token: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id',
            },
            allowNull: false,
        },
        expires: {
            type: DataTypes.DATE,
            allowNull: false,
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
    await queryInterface.dropTable('RefreshTokens');
};