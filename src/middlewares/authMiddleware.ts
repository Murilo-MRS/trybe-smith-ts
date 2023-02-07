import { Handler } from 'express';
import authenticateToken from '../utils/authenticateToken';

const authenticateMiddleware : Handler = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const user = authenticateToken(authorization);
    
    req.body.user = user;
    next();
  } catch (err) {
    return { message: 'Invalid token' };
  }
};

export default authenticateMiddleware;