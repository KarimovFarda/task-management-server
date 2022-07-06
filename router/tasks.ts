import Tasks from '../models/tasks'
import cors from 'cors';
import express, { Request, Response } from 'express';
import { ITasks } from '../Interface/types';
export const tasksRouter = express.Router();
tasksRouter.use(cors());
tasksRouter.get("/", async (req: Request, res: Response) => {
    try {
        const tasks = await Tasks.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
})

tasksRouter.post("/", async (req: Request, res: Response) => {
    const tasksPayload: ITasks = {
        ...req.body
    }
    const tasks = new Tasks(tasksPayload);
    try {
        const newTasks = await tasks.save();
        res.status(200).json(newTasks);

    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
})

tasksRouter.put("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        let tasks = await Tasks.findById(id);
        if (!tasks) {
            res.status(404).json({ message: "Not Found" })
        } else {
            await Tasks.findByIdAndUpdate(id, req.body, {
                useFindAndModify: false
            })
            tasks = await Tasks.findById(id);
            res.json(tasks);
        }

    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
})


tasksRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const tasks = await Tasks.findById(id);
        if (!tasks) {
            res.status(404).json({ message: "Not Tryed" });
        } else {
            await tasks.remove();
            res.json({ message: "Tasks Deleted." })
        }
    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
})

export default tasksRouter