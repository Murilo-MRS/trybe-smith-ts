import connection from '../models/connection';
import OrderModel from '../models/OrderModel';
import IOrder from '../interfaces/order.interface';
// import authenticateToken from '../utils/authenticateToken';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async bulkCreate(orderList: number[], userId : number): Promise<IOrder> {
    await this.model.bulkCreate(orderList, userId);
    
    return { userId, productsIds: orderList };
  }

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}