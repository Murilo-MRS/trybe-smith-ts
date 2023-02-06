import express from 'express';
import UserController from '../controllers/UserController';

const routes = express.Router();
const userController = new UserController();

routes.post('/', userController.signup);
// routes.get('/', userController.getAllProduct);

export default routes;