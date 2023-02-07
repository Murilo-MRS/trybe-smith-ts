import express from 'express';
import ProductController from '../controllers/ProductController';
import validateProducts from '../middlewares/validateProduct';

const routes = express.Router();
const productController = new ProductController();

routes.post('/', validateProducts, productController.createProduct);
routes.get('/', productController.getAllProduct);

export default routes;