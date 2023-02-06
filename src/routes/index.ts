import express from 'express';
import orderRoute from './order.routes';
import productRoute from './product.routes';
import userRoute from './user.routes';

const routes = express.Router();

routes.use('/orders', orderRoute);
routes.use('/products', productRoute);
routes.use('/users', userRoute);

export default routes;