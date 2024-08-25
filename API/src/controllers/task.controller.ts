import { Request, response, Response } from "express";

import {connect} from '../database';

//import interface
import { Task } from '../interface/Task';

export async function getTasks(req: Request, res: Response): Promise<Response>{
    const conn = await connect();
    const tasks = await conn.query('SELECT * FROM tareas');
    return res.json(tasks[0]);
}

export async function createTask(req: Request, res: Response){
    const newTask: Task = req.body;
    //console.log(newTask);
    const conn = await connect();
    await conn.query('INSERT INTO tareas SET ?', [newTask]);
    return res.json({
        message: "Task created"
    });
}

export async function getTask(req: Request, res: Response): Promise<Response>{
    const id = req.params.taskId;
    const conn = await connect();
    const task = await conn.query('SELECT * FROM tareas WHERE id = ?', [id]);
    return res.json(task[0]);
}

export async function deleteTask(req: Request, res: Response){
    const id = req.params.taskId;
    const conn = await connect();
    await conn.query('DELETE FROM tareas WHERE id = ?', [id]);
    return res.json({
        message: "Task deleted"
    });
}

export async function updateTask(req: Request, res: Response){
    const id = req.params.taskId;
    const updateTask: Task = req.body;
    const conn = await connect();
    await conn.query('UPDATE tareas set ? WHERE id = ?', [updateTask, id]);
    return res.json({
        message: "Task updated"
    });
}