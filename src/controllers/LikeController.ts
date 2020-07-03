import { Request, Response } from "express";
import Like from "../models/Like";

class LikeController {
  public async index(req: Request, res: Response): Promise<Response> {
    const likes = await Like.find();

    return res.json(likes);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const id_user = 3; // virá do token
    const { id_post } = req.body;

    const like = {
      id_post,
      id_user,
    };

    await Like.create(like);

    return res.json(like);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const id_user = 3; // isso virá do token

    const { id_post } = req.body;

    const like = await Like.findOne({
      id_user,
      id_post
    });

    if (!like) {
      return res.json({
        title: "Error",
        message: "Like not found",
      });
    }

    const deleted = await like.deleteOne();

    return res.json(deleted);
  }
}

export default new LikeController();