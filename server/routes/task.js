import express from "express";
import {
    AddTask,
    FindAllTasks,
    FindOneTask,
    UpdateTask,
    DeleteTask
} from "../controllers/Task.js";
import {loggedMiddleware,updateMiddleware} from "../middlewares/auth.js"
const router = express.Router();
router.post('/AddTask',loggedMiddleware, AddTask)
router.get('/FindAllTasks',loggedMiddleware, FindAllTasks)
router.get('/FindOneTasks/:id',loggedMiddleware, FindOneTask)
router.patch('/UpdateTask/:id',loggedMiddleware,updateMiddleware,UpdateTask)
router.delete('/DeleteTask/:id',loggedMiddleware, DeleteTask)
export default router;