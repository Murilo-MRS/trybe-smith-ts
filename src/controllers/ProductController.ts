import { Request, Response } from 'express';
import statusCodes from '../utils/statusCode';
import ProductService from '../services/ProductService';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public createProduct = async (req: Request, res: Response) => {
    // const product = req.body;

    const newProduct = await this.productService.create(req.body);
    res.status(statusCodes.CREATED).json(newProduct);
  };
}
