export interface IUserCredentials {
  username: string;
  password: string;
}

export interface IUser extends IUserCredentials {
  level: number;
  vocation: string;
}