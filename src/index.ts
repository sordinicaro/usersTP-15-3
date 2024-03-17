// sistema de login
// ver lista users -> OCULTAR DATA SENSIBLE
// register -> registrar un new user - VERIFICAR SI NO EXISTE EL USER, HASHEAR PASS
// login -> loguear un user -> GENERAR TOKEN
// actualizar -> un user
// borrar user

import express, { Request, Response, NextFunction } from "express";
import users from "./database/users.json";
import jsonfile from "jsonfile";
import { userRouter } from "./router/userRouter";

const app = express();


const PORT = process.env.PORT || 2020;


app.use(express.json()); //-> MDW PARA EL REQ.BODY

app.get("/api", (req, res) => {
  res.json({
    version: "1.0.0",
    author: "Ailen Paez",
    paths: ["holi"],
  });
});


app.use("/api/users", userRouter)


app.use("/api/users", userRouter)



app.use("*", (req, res) => {
  res.status(404).json({ error: "recurso not found" });
});

// app.delete("/api/users/logout", validateAuth, (req, res) => {
//     const { username } = req.body;
//     const user = users.find((u) => u.username === username);
  
//     if (!user) return res.status(404).json({ error: "User not found" });
  
//     user.token = "";
  
//     jsonfile.writeFileSync("./src/database/users.json", users);
  
//     res.status(201).json({ message: "User logout" });
//   });

app.listen(PORT, () => {
  console.log(`SERVER_LISTENING_ON_PORT -> http://localhost:${PORT}`);
});
