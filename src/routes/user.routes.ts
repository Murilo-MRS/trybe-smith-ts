import express from 'express';
import UserController from '../controllers/UserController';
import validateUser from '../middlewares/validateUser';
import validLoginBody from '../middlewares/validLoginBody';

const routes = express.Router();
const userController = new UserController();

routes.post('/', validateUser, validLoginBody, userController.signup);

export default routes;