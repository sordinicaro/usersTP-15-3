// sistema de login
// ver lista users -> OCULTAR DATA SENSIBLE
// register -> registrar un new user - VERIFICAR SI NO EXISTE EL USER, HASHEAR PASS
// login -> loguear un user -> GENERAR TOKEN
// actualizar -> un user
// borrar user
 
import express from "express";
;
import { userRouter } from "./router/userRouter";

const PORT = process.env.PORT || 2020;

const app = express();


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

app.use("/api/users", userRouter)

app.use("*", (req, res) => {
  res.status(404).json({ error: "recurso not found" });
});


app.listen(PORT, () => {
  console.log(`SERVER_LISTENING_ON_PORT -> http://localhost:${PORT}`);
});
