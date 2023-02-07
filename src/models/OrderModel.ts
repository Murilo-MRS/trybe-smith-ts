import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async bulkCreate(productsId: number[], userId : number): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [userId],
    );

    await Promise.all(
      productsId.map(async (product: number) => {
        await this.connection.execute(`
        UPDATE Trybesmith.products SET order_id = ? WHERE id = ?
        `, [insertId, product]);
      }),
    );

    return insertId;
  }

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