import { Request, Response } from 'express';
import Post from '../models/Post';

class PostController {
  public async index(req: Request, res: Response): Promise<Response> {
    const posts = await Post.find();

    return res.json(posts);
  }

  public async create(req: Request, res:Response): Promise<Response> {
    // o id_user virá do token posteriormente
    const {id_user, content} = req.body;

    const post = {
      id_user,
      content
    }

    await Post.create(post);

    return res.json(post);
  }
}

export default new PostController();