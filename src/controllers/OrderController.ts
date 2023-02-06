import { Request, Response } from 'express';
import statusCodes from '../utils/statusCode';
import OrderService from '../services/OrderService';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  // public createOrder = async (req: Request, res: Response) => {
  //   const newOrder = await this.orderService.create(req.body);
  //   res.status(statusCodes.CREATED).json(newOrder);
  // };

  public getAllOrders = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(statusCodes.OK).json(orders);
  };
}
