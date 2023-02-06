import { Request, Response } from 'express';
import statusCodes from '../utils/statusCode';
import UserService from '../services/ProductService';

export default class ProductController {
  constructor(private userService = new UserService()) {}

  public signup = async (req: Request, res: Response) => {
    const newUser = await this.userService.create(req.body);
    res.status(statusCodes.CREATED).json(newProduct);
  };

  // public getAllProduct = async (_req: Request, res: Response) => {
  //   const products = await this.userService.getAll();
  //   res.status(statusCodes.OK).json(products);
  // };
}
