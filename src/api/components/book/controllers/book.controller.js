import { Op } from "sequelize";
import httpStatus from "http-status";
import { Book } from "../../../db/models/Book.js";
import APIError from '../../../utils/api-error.js';

// get all books
const getBooks = async (req, res, next) => {
    try {
        const { categories, author, title } = req.query;
        const where = {};

        if (categories) {
            where.categories = categories.split(',');
        }
        if (author) {
            where.author = { [Op.like]: `%${author}%` };
        }
        if (title) {
            where.title = { [Op.like]: `%${title}%` };
        }

        const books = await Book.findAll({ where });
        return res.json(books);
    } catch (error) {
        return next(error);
    }
};

// get book by id
const getBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await Book.findByPk(id);
        if (!book) {
            throw new APIError({
                status: httpStatus.UNAUTHORIZED,
                message: 'Book not found',
            });
        }
        return res.json(book);
    } catch (error) {
        return next(error);
    }
}

// create book
const createBook = async (req, res, next) => {
    try {
        const book = await Book.create(req.body);
        return res.json(book);
    } catch (error) {
        return next(error);
    }
};

// update book
const updateBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await Book.findByPk(id);
        if (!book) {
            throw new APIError({
                status: httpStatus.UNAUTHORIZED,
                message: 'Book not found',
            });
        }
        await book.update(req.body);
        return res.json(book);
    } catch (error) {
        return next(error);
    }
};

// delete book
const deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await Book.findByPk(id);
        if (!book) {
            throw new APIError({
                status: httpStatus.UNAUTHORIZED,
                message: 'Book not found',
            });
        }
        await book.destroy();
        return res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        return next(error);
    }
}

export default
{
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
};