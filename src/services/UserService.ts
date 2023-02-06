// ./services/books.service.ts

import { IUser } from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/UserModel';
import generateToken from '../utils/generateToken';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUser) {
    const createdUser = await this.model.create(user);
    if (!createdUser) return { message: 'Erro ao criar usuário' };

    const payload = {
      username: user.username,
      vocation: user.vocation,
      level: user.level,
    };

    const token = generateToken(payload);

    return token;
  }
}