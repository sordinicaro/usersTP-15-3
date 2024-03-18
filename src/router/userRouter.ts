import { UserController } from "../conrtoller/userController";
import { validateAuth } from "../middlware/validator";
import { Router } from "express";


const userRouter = Router();

userRouter.get("/",  UserController.getAllUsers);
userRouter.post("/register",validateAuth, UserController.registerUser)
userRouter.post("/login" ,validateAuth, UserController.loginUser)
userRouter.delete("/logout",validateAuth,UserController.logoutUser)

export{userRouter}
