// ./services/books.service.ts

import { IUserCredentials } from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/UserModel';
import generateToken from '../utils/generateToken';

export default class LoginService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async login(body: IUserCredentials) {
    const user = await this.model.getUser(body);

    if (!user) return { type: 'UNAUTHORIZED', message: 'Username or password invalid' };

    if (body.password !== user.password) {
      return { type: 'UNAUTHORIZED', message: 'Username or password invalid' };
    }

    const payload = {
      id: user.id,
      username: user.username,
      vocation: user.vocation,
      level: user.level,
    };

    const token = generateToken(payload);

    return { type: null, message: token };
  }
}