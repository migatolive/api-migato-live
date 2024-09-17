import * as Yup from 'yup';
import APIError from '../../../utils/api-error.js';

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

export const Schemas = {
    createBook: Yup.object().shape({
        title: Yup.string()
            .required(),
        author: Yup.string()
            .required(),
        publisher: Yup.string()
            .required(),
        categories: Yup.array()
            .of(Yup.string()
            .oneOf(Object.values(categories)))
            .required(),
        description: Yup.string()
            .required(),
        pdfUrl: Yup.string()
            .url()
            .required(),
        coverImageUrl: Yup.string()
            .url()
            .required(),
    }),
    updateBook: Yup.object().shape({
        title: Yup.string(),
        author: Yup.string(),
        publisher: Yup.string(),
        categories: Yup.array()
            .of(Yup.string()
            .oneOf(Object.values(categories))),
        description: Yup.string(),
        pdfUrl: Yup.string()
            .url(),
        coverImageUrl: Yup.string()
            .url(),
    }),
};