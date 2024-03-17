import { UserController } from "../conrtoller/userController";
import { validateAuth } from "../middlware/validator";
import { Router } from "express";


const userRouter = Router();

userRouter.get("/", validateAuth, UserController.getAllUsers);
userRouter.post("/register", UserController.registerUser)
userRouter.post("/login" , UserController.loginUser)

export{userRouter}
