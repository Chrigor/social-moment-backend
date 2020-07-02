import { Request, Response } from "express";
import Follow from "../models/Follows";

class FollowController {
  public async index(req: Request, res: Response): Promise<Response> {
    const follows = await Follow.find();

    return res.json(follows);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    // futuramente id_user_seguidor virá do token
    const { id_user_seguidor, id_user_seguido } = req.body;

    const follow = {
      id_user_seguido,
      id_user_seguidor,
    };

    await Follow.create(follow);

    return res.json(follow);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const id_user_logado = 1; // isso virá do token

    const { id_user_seguidor, id_user_seguido } = req.body;

    const register = await Follow.findOne({
      id_user_seguidor,
      id_user_seguido,
    });

    if (!register) {
      return res.json({
        title: "Error",
        message: "Follow not found",
      });
    }

    if (id_user_seguidor !== id_user_logado) {
      return res.status(403).json({
        title: 'Error',
        message: 'Operation not permitted'
      });
    }

    const deleted = await register.deleteOne();

    return res.json(deleted);
  }
}

export default new FollowController();
