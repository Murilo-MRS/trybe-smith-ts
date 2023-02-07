import { Handler, Request, Response } from 'express';
import statusCodes from '../utils/statusCode';
import OrderService from '../services/OrderService';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public createOrder : Handler = async (req: Request, res: Response) => {
    const { productIds } = req.body;
    const { id } = req.body.user;
    
    const newOrder = await this.orderService.bulkCreate(productIds, id);
    res.status(statusCodes.CREATED).json(newOrder);
  };

  public getAllOrders = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(statusCodes.OK).json(orders);
  };
}
