import { OkPacket, Pool, RowDataPacket } from 'mysql2/promise';
import { IUser, IUserCredentials } from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<number> {
    const { username, vocation, level, password } = user;
    const [{ insertId }] = await this.connection.execute<OkPacket>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    return insertId;
  }

  public async getUser(user: IUserCredentials): Promise<IUser> {
    const { username } = user;
    const [[result]] = await this.connection.execute<(
    RowDataPacket & IUser)[]>(
      'SELECT * FROM Trybesmith.users WHERE username = ?',
      [username],
      );
    
    return result;
  }
}