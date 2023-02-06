import { Pool, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  // public async create(order: IOrder): Promise<IOrder> {
  //   const { name, amount } = order;
  //   const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
  //     'INSERT INTO Trybesmith.orders (name, amount) VALUES (?, ?)',
  //     [name, amount],
  //   );
  //   return { id: insertId, ...order };
  // }
  // json_arrayagg transforma a visualizacao de dados da tabela em array
  public async getAll(): Promise<IOrder[]> {
    const [result] = await this.connection.execute<RowDataPacket[] & IOrder[]>(`
    SELECT o.id, o.user_id AS userId, json_arrayagg(p.id) AS productsIds
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p ON
    o.id = p.order_id
    GROUP BY o.id
    `);
    return result;
  }
}