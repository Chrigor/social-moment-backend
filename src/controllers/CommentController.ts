import { Request, Response } from "express";
import Comment from "../models/Comment";

class CommentController {
  public async index(req: Request, res: Response): Promise<Response> {
    const comments = await Comment.find();

    return res.json(comments);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    // futuramente id_user_seguidor virá do token
    const id_user = 3; // isso virá do token
    const { id_post, content } = req.body;

    const comment = {
      id_post,
      id_user,
      content,
    };

    await Comment.create(comment);

    return res.json(comment);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const id_user = 3; // isso virá do token

    const { id_comment } = req.body;

    const comment = await Comment.findOne({
      id_user,
      _id: id_comment,
    });

    console.log(id_comment, id_user);

    if (!comment) {
      return res.json({
        title: "Error",
        message: "comment not found",
      });
    }

    const deleted = await comment.deleteOne();

    return res.json(deleted);
  }
}

export default new CommentController();
