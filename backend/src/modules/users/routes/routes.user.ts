import { Router } from "express";
import { UserController } from "../controllers/UserController";


export const userRouter = Router()

const userController = new UserController()

userRouter.get('/', userController.index)
userRouter.post('/', userController.create)