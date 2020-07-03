import { Request, Response } from "express";
import User from "../models/User";
import { encryptPassword } from "../utils/Password";
import { generateToken } from "../utils/generatedToken";
import { sendMail } from "../utils/sendMail";

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
    const accountToken = generateToken();

    const user = {
      name,
      birthday,
      email,
      password,
      accountToken,
    };

    await User.create(user);

    sendMail({
      to: email,
      subject: "Ativar conta!",
      template: "activeAccount",
      context: {
        token: accountToken,
        name,
      },
    });

    return res.json(user);
  }
}

export default new UserController();
