import { Router, Request, Response } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

routes.get('/users', UserController.index);

export default routes;