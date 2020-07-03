import { Router, Request, Response } from 'express';
import UserController from './controllers/UserController';
import PostController from './controllers/PostController';
import FollowController from './controllers/FollowController';
import LikeController from './controllers/LikeController';
import CommentController from './controllers/CommentController';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

routes.get('/user', UserController.index);
routes.post('/user', UserController.create);

routes.get('/post', PostController.index);
routes.post('/post', PostController.create);
routes.delete('/post', PostController.delete);

routes.get('/follow', FollowController.index);
routes.post('/follow', FollowController.create);
routes.delete('/follow', FollowController.delete);

routes.get('/like', LikeController.index);
routes.post('/like', LikeController.create);
routes.delete('/like', LikeController.delete);

routes.get('/comment', CommentController.index);
routes.post('/comment', CommentController.create);
routes.delete('/comment', CommentController.delete);

export default routes;