import { Router, Request, Response } from 'express';
import UserController from './controllers/UserController';
import PostController from './controllers/PostController';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

routes.get('/user', UserController.index);
routes.post('/user', UserController.create);

routes.get('/post', PostController.index);
routes.post('/post', PostController.create);

export default routes;