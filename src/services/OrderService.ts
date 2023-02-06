import connection from '../models/connection';
import OrderModel from '../models/OrderModel';
import IOrder from '../interfaces/order.interface';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  // public async create(order: IOrder): Promise<IOrder> {
  //   const newOrder = await this.model.create(order);
  //   return newOrder;
  // }

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}