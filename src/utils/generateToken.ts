import jwt from 'jsonwebtoken';

import IToken from '../interfaces/token.interface';

const secret = process.env.JWT_SECRET || 'secret';

const generateToken = (payload: IToken) => 
  jwt.sign(payload, secret, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });

export default generateToken;
