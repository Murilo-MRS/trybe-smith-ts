import express from 'express';
import OrderController from '../controllers/OrderController';
import authenticateMiddleware from '../middlewares/authMiddleware';

const routes = express.Router();
const orderController = new OrderController();

routes.post('/', authenticateMiddleware, orderController.createOrder);
routes.get('/', orderController.getAllOrders);

export default routes;