import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default function (req: Request, res: Response, next: NextFunction) {
  const secret = process.env.JWT_SECRET;

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const [_, token] = authHeader.split(" ");

  try {
    jwt.verify(token, secret, (err, result) => {
      if (err) {
        throw "Token invalid";
      }
      
      req.consumerId = result._id;

      return next();
    });
  } catch (error) {
    return res.status(401).json({ error: "Token invalid" });
  }
}
