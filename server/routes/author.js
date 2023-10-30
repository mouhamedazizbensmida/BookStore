import express from "express";
import {
    AddAuthor,
    FindAllAuthors,
    FindOneAuthor,
    UpdateAuthor,
    DeleteAuthor
} from "../controllers/Author.js";
const router = express.Router();
router.post('/AddAuthor', AddAuthor)
router.get('/FindAllAuthors', FindAllAuthors)
router.get('/FindOneAuthor/:id', FindOneAuthor)
router.patch('/UpdateAuthor/:id', UpdateAuthor)
router.delete('/DeleteAuthor/:id', DeleteAuthor)
export default router;