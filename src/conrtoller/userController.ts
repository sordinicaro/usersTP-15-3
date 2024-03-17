import { Request,Response } from "express";
import { UserModel } from "../model/usersModel";
import { any } from "zod";


abstract class UserController{
    static getAllUsers = (req:Request,res:Response) =>{
        const user = UserModel.getAllUsers();
        console.log(user);
        res.json(user)
    }

    static registerUser = (req: Request, res: Response) => {
          const { username, password, email } = req.body;
          const response = UserModel.registerUser({ username, password, email })
          res.status(response).json({ username, email });
        }

     static loginUser = (req: Request, res: Response) => {
        const { username, password } = req.body;
        const user:any = UserModel.loginUser({ username, password });

        if (!user) return res.status(404).json({ error: "User not found..." });
        if (user.password !== password)
          return res.status(400).json({ error: "Bad request..." });
      
    res.json(user);
     }   

}
export {UserController}