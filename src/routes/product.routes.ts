import express from 'express';
import ProductController from '../controllers/ProductController';

const routes = express.Router();
const productController = new ProductController();

routes.post('/', productController.createProduct);
routes.get('/', productController.getAllProduct);

export default routes;