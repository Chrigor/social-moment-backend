import { Request, Response } from "express";
import Share from "../models/Share";

class ShareController {
  public async index(req: Request, res: Response): Promise<Response> {
    const shares = await Share.find();

    return res.json(shares);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const id_user = 3; // virá do token
    const { id_post } = req.body;

    const share = {
      id_post,
      id_user,
    };

    await Share.create(share);

    return res.json(share);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const id_user = 3; // isso virá do token

    const { id_share:_id } = req.body;

    const share = await Share.findOne({
      id_user,
     _id
    });

    if (!share) {
      return res.json({
        title: "Error",
        message: "Share not found",
      });
    }

    const deleted = await share.deleteOne();

    return res.json(deleted);
  }
}

export default new ShareController();