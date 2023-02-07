export interface IUserCredentials {
  username: string;
  password: string;
}

export interface IUser extends IUserCredentials {
  id?: number,
  level: number;
  vocation: string;
}