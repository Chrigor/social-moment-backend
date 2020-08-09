import { Request, Response } from "express";
import Post from "../models/Post";
import Like from "../models/Like";
import Share from "../models/Share";

class PostController {
  // páginar isso daqui depois
  public async index(req: Request, res: Response): Promise<Response> {
    const posts = await Post.find();
    let postsInfo = [];
    const id_user = 3; // virá do token

    for (let index = 0; index < posts.length; index++) {
      const post = posts[index];
      const like = await Like.findOne({ id_post: post._id, id_user });
      const share = await Share.findOne({ id_post: post._id, id_user });

      let liked = like ? true : false;
      let shared = share ? true : false;

      const postInfo = {
        ...post._doc,
        ...{
          liked,
          shared
        },
      };

      postsInfo.push(postInfo);
    }

    return res.json(postsInfo);
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
