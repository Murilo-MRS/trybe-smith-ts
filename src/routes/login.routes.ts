import express from 'express';
import LoginController from '../controllers/LoginController';
import validLoginBody from '../middlewares/validLoginBody';

const routes = express.Router();
const loginController = new LoginController();

routes.post('/', validLoginBody, loginController.login);
// routes.get('/', userController.getAllProduct);

export default routes;