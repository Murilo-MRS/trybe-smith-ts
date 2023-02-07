import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const authenticateToken = (token: string) => {
  const verificationResponse = jwt.verify(token, secret);
  return verificationResponse;
};

export default authenticateToken;