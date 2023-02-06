import express from 'express';
import OrderController from '../controllers/OrderController';

const routes = express.Router();
const orderController = new OrderController();

// routes.post('/', orderController.createOrder);
routes.get('/', orderController.getAllOrders);

export default routes;