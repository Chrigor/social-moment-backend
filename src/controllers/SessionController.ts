import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { comparePassword } from "../utils/Password";

class SessionController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    let secret = process.env.JWT_SECRET;
    let expiresIn = process.env.JWT_EXPIRESIN;

    console.log(secret);

    const user = await User.findOne({
      email,
    }).select('+password');

    if (!user) {
      return res.status(401).json({
        title: "Error",
        message: "User not found",
      });
    }

    if (!(await comparePassword(password, user.password))) {
      return res.status(401).json({ error: "Password does not match" });
    }

    const { _id, name } = user;

    return res.json({
      user: {
        _id,
        name,
        email,
      },
      token: jwt.sign({ _id }, secret, {
        expiresIn,
      }),
    });
  }
}

export default new SessionController();