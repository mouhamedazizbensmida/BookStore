import express from "express";
import {
    AddBook,
    FindAllBooks,
    FindOneBook,
    UpdateBook,
    DeleteBook,
    findbookbyauthor,
    AddbookVaAuthor,
} from "../controllers/Book.js";
const router = express.Router();
router.post('/AddBook', AddBook)
router.get('/FindAllBooks', FindAllBooks)
router.get('/FindOneBook/:id', FindOneBook)
router.patch('/UpdateBook/:id', UpdateBook)
router.delete('/DeleteBook/:id', DeleteBook)
router.get('/books/author/:id',findbookbyauthor);
router.post("/AddbookVaAuthor",AddbookVaAuthor)
export default router;