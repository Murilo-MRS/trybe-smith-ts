import { Handler } from 'express';
import statusCodes from '../utils/statusCode';
import { productBodySchema } from './validations/schemas';

const validateProducts : Handler = async (req, res, next) => {
  const { name, amount } = req.body;
  const { error } = productBodySchema.validate(req.body);

  if (!name) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"name" is required' });
  }
  if (!amount) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"amount" is required' });
  }

  if (error?.message.includes('least')) {
    return res.status(422).json({ message: error.message });
  }

  if (error?.message.includes('must')) {
    return res.status(422).json({ message: error.message });
  }

  next();
};

export default validateProducts;