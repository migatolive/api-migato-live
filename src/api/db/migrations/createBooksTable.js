import {DataTypes} from "sequelize";

const categories = [
    'fiction',
    'nonFiction',
    'fantasy',
    'mystery',
    'thriller',
    'romance',
    'horror',
    'scienceFiction',
    'historicalFiction',
    'biography',
    'autobiography'
];

export const up = async ({ context: queryInterface }) => {
    await queryInterface.createTable('Books', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        publisher: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categories: {
            type: DataTypes.ARRAY(DataTypes.ENUM(...categories)),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        pdfUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        coverImageUrl: {
            type: DataTypes.STRING,
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
    await queryInterface.dropTable('Books');
};