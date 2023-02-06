import { Request, Response } from 'express';
import statusCodes from '../utils/statusCode';
import UserService from '../services/UserService';

export default class ProductController {
  constructor(private userService = new UserService()) {}

  public signup = async (req: Request, res: Response) => {
    const token = await this.userService.create(req.body);
    res.status(statusCodes.CREATED).json({ token });
  };

  // public getAllProduct = async (_req: Request, res: Response) => {
  //   const products = await this.userService.getAll();
  //   res.status(statusCodes.OK).json(products);
  // };
}
