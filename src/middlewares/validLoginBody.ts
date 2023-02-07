import { Handler } from 'express';
import statusCodes from '../utils/statusCode';

const validLoginBody : Handler = (req, res, next) => {
  const { username, password } = req.body;
  if (!username) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"password" is required' });
  }
  next();
};

export default validLoginBody;