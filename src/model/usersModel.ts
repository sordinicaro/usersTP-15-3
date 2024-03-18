import users from "../database/users.json";
import { randomUUID } from "node:crypto";
import { writeFileSync } from "jsonfile";
import { any, object } from "zod";

abstract class UserModel {
  static getAllUsers = () => {
    return users;
  };
  static registerUser = (objUser: any) => {
    const { username, password, email } = objUser;

    users.push({ username, password, email, token: "" });

    writeFileSync("./src/database/users.json", users);

    return 200
  }
  static loginUser = (object: any) => {
    const { username, password } = object;

    const user: any = users.find((u) => u.username === username);
   
    if (!user) return 404;

    if (user.password !== password) return 400;

    const token = crypto.randomUUID();
    user.token = token;
    writeFileSync("./src/database/users.json", users);
      return { message: "User logged", token: token };


  }
  static logoutUser = (object:any) =>{
    const { username } = object;
  const user:any = users.find((u) => u.username === username);

  
  if (!user) return 404;
  

    user.token = "";

    writeFileSync("./src/database/users.json", users);

   return({ message: "User logout" });
  }  
}

export { UserModel }