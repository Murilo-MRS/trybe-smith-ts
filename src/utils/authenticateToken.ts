import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const authenticateToken = async (token: string) => {
  if (!token) {
    return { type: 'INVALID_TOKEN', message: 'Token not found' };
  }

  try {
    const verificationResponse = jwt.verify(token, secret);
    return verificationResponse;
  } catch (err) {
    return { type: 'INVALID_TOKEN', message: 'Expired or invalid token' };
  }
};

export default authenticateToken;