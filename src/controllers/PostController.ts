import { Request, Response } from "express";
import Post from "../models/Post";

class PostController {
  public async index(req: Request, res: Response): Promise<Response> {
    const posts = await Post.find();

    return res.json(posts);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    // o id_user virá do token posteriormente
    const id_user = 3;
    const { content } = req.body;

    const post = {
      id_user,
      content,
    };

    await Post.create(post);

    return res.json(post);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const id_user = 3; // isso aqui vira do token

    const { id_post: _id } = req.body;

    const post = await Post.findOne({
      id_user,
      _id,
    });

    if (!post) {
      return res.json({
        title: "Error",
        message: "Post not found",
      });
    }

    const deleted = await post.deleteOne();

    return res.json(deleted);
  }
}

export default new PostController();
