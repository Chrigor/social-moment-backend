import { Request, Response } from "express";
import User from "../models/User";
import { encryptPassword } from "../utils/Password";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await User.find();

    // id do usuário logado
    // const { consumerId } = req;
    // console.dir(consumerId);

    return res.json(users);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    let { name, birthday, email, password } = req.body;

    password = await encryptPassword(password);

    const user = {
      name,
      birthday,
      email,
      password,
    };

    await User.create(user);

    return res.json(user);
  }
}

export default new UserController();
