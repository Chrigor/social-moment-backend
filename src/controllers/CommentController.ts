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

    const { id_comment: _id } = req.body;

    const comment = await Comment.findOne({
      _id,
    });

    if (!comment) {
      return res.json({
        title: "Error",
        message: "comment not found",
      });
    }

    if (comment.id_user !== id_user) {
      return res.json({
        title: "Error",
        message: "Operation not permitted",
      });
    }

    const deleted = await comment.deleteOne();

    return res.json(deleted);
  }
}

export default new CommentController();
