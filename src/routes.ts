import { Router, Request, Response } from 'express';
import auth from './middlewares/auth';

import UserController from './controllers/UserController';
import PostController from './controllers/PostController';
import FollowController from './controllers/FollowController';
import LikeController from './controllers/LikeController';
import CommentController from './controllers/CommentController';
import ShareController from './controllers/ShareController';
import SessionController from './controllers/SessionController';
import AccountController from './controllers/AccountController';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

routes.post('/session', SessionController.create);
routes.post('/user', UserController.create);
routes.post('/checkAccount', AccountController.create);

// routes.use(auth);

routes.get('/user', UserController.index);

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

routes.get('/share', ShareController.index);
routes.post('/share', ShareController.create);
routes.delete('/share', ShareController.delete);

export default routes;