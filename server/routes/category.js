import express from "express";
import {
    AddCategory,
    FindAllCategorys,
    FindOneCategory,
    UpdateCategory,
    DeleteCategory
} from "../controllers/Category.js";
const router = express.Router();
router.post('/AddCategory', AddCategory)
router.get('/FindAllCategorys', FindAllCategorys)
router.get('/FindOneCategory/:id', FindOneCategory)
router.patch('/UpdateCategory/:id', UpdateCategory)
router.delete('/DeleteCategory/:id', DeleteCategory)
export default router;