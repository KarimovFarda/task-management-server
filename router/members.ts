import Members from '../models/member'
import cors from 'cors';
import express, { Request, Response } from 'express';
import { IMember } from '../Interface/types';
export const membersRouter = express.Router();
membersRouter.use(cors());
membersRouter.get("/", async (req: Request, res: Response) => {
    try {
        const members = await Members.find();
        res.status(200).json(members);
    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
})

membersRouter.post("/", async (req: Request, res: Response) => {
    const membersPayload: IMember = {
        ...req.body
    }
    const members = new Members(membersPayload);
    try {
        const newMembers = await members.save();
        res.status(200).json(newMembers);

    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
})

export default membersRouter