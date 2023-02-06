// ./services/books.service.ts

import connection from '../models/connection';
import ProductModel from '../models/ProductModel';
import IProduct from '../interfaces/product.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: IProduct): Promise<IProduct> {
    const book = await this.model.create(product);
    return book;
  }
}