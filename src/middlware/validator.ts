import { Request, Response, NextFunction } from "express";
import users from "../database/users.json"

const validateAuth = (req: Request, res: Response, next: NextFunction) => {
    // Enviar token por el cuerpo de la petición
    //const { token } = req.body;
  
    // Enviar token por el header (forma no oficial)
    // const { authorization } = req.headers;
  
    const token = req.get("Authorization");
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    const exists = users.find((u) => u.token === token);
    if (!exists) return res.status(401).json({ error: "Unauthorized" });
  
    next();
  };

export {validateAuth}