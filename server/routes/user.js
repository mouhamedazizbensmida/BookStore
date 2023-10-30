import express from "express";
import {
    Signup,Login
} from "../controllers/User.js";
const router = express.Router();
router.post('/Signup',Signup)
router.post('/Login',Login)
// router.get('/FindAllTasks', FindAllTasks)
// router.get('/FindOneTasks/:id', FindOneTask)
// router.patch('/UpdateTask/:id', UpdateTask)
// router.delete('/DeleteTask/:id', DeleteTask)
export default router;