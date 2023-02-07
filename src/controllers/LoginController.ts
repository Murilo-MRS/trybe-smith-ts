import { Request, Response } from 'express';
import statusCodes from '../utils/statusCode';
import LoginService from '../services/LoginService';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    const { type, message } = await this.loginService.login(req.body);

    if (type) return res.status(statusCodes.UNAUTHORIZED).json({ message });

    res.status(statusCodes.OK).json({ token: message });
  };
}
