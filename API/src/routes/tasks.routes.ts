import { Router } from "express";
const router = Router();

import { getTasks, createTask, getTask, deleteTask, updateTask } from '../controllers/task.controller';

router.route('/')
    .get(getTasks)
    .post(createTask);

router.route('/:taskId')
    .get(getTask)
    .delete(deleteTask)
    .put(updateTask);

export default router;