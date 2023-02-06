import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const authenticateToken = async (token: string) => {
  if (!token) {
    const error = new Error('Token not found');
    error.type = 'INVALID_TOKEN';
    throw error;
  }

  try {
    const verificationResponse = await jwt.verify(token, secret);
    return verificationResponse;
  } catch (err) {
    const error = new Error('Expired or invalid token');
    error.type = 'INVALID_TOKEN';
    throw error;
  }
};

export default authenticateToken;