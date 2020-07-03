import { Request, Response } from "express";
import User from "../models/User";

class AccountController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, token } = req.body;

    const user = await User.findOne({ email }).select("+accountToken");

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    if (user.accountToken != token) {
      return res.status(400).json({
        message: "Token invalid",
      });
    }

    await user.updateOne({
      accountChecked: true,
    });

    return res.json({
      message: "Account activated!",
    });
  }
}

export default new AccountController();