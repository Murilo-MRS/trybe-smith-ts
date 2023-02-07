import express from 'express';
import OrderController from '../controllers/OrderController';
import authenticateMiddleware from '../middlewares/authMiddleware';
import validOrder from '../middlewares/validOrder';

const routes = express.Router();
const orderController = new OrderController();

routes.post('/', authenticateMiddleware, validOrder, orderController.createOrder);
routes.get('/', orderController.getAllOrders);

export default routes;