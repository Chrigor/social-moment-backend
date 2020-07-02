import { Request, Response } from "express";
import User from "../models/User";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await User.find();

    return res.json(users);
  }

  public async create(req: Resquest, res: Response): Promise<Response> {
    const { name, birthday, email, password } = req.body;

    const user = {
      name,
      birthday,
      email,
      password
    };

    await User.create(user);

    return res.json(user);
  }
}

export default new UserController();
