import express from 'express';
import productRoute from './product.routes';

const routes = express.Router();

routes.use('/products', productRoute);

export default routes;