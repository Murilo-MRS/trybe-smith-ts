import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IProduct from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  }

  public async getAll(): Promise<IProduct[]> {
    const [result] = await this.connection.execute<RowDataPacket[] & IProduct[]>(
      'SELECT * FROM Trybesmith.products',
    );
    return result;
  }
}