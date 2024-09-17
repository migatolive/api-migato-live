import { DataTypes } from 'sequelize';
import APIError from "../../utils/api-error.js";
import { sequelize } from '../../config/database.js';

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

export const Book = sequelize.define('Book', {
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
}, {
    timestamps: true,
});