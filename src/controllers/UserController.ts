import { Request, Response } from 'express';
import User from '../models/User';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    return res.json([
      {
        name: 'Hello'
      }
    ]);
  }
}

export default new UserController();