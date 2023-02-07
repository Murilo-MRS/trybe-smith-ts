import { Handler } from 'express';
import statusCodes from '../utils/statusCode';
import { userBodySchema } from './validations/schemas';

const validateUser : Handler = async (req, res, next) => {
  const { level, vocation } = req.body;
  const { error } = userBodySchema.validate(req.body);

  if (error?.message.includes('must be')) {
    return res.status(422).json({ message: error.message });
  }
  if (!level) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"level" is required' });
  }
  if (!vocation) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"vocation" is required' });
  }

  next();
};

export default validateUser;