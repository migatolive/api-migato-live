import {Router} from 'express';
import controller from '../controllers/book.controller.js';
import { validate } from "../../../middlewares/sequelize.js";
import { Schemas } from '../validators/book.validator.js';

const router = Router();

router.route('/')
    .get(controller.getBooks)
    .post(validate(Schemas.createBook), controller.createBook);

router.route('/:id')
    .get(controller.getBook)
    .put(validate(Schemas.updateBook), controller.updateBook)
    .delete(controller.deleteBook);

export default router;