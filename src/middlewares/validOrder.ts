import { Handler } from 'express';
import statusCodes from '../utils/statusCode';
import { orderListSchema } from './validations/schemas';

const validOrder : Handler = async (req, res, next) => {
  const { productsIds } = req.body;
  const { error } = await orderListSchema.validate(productsIds);

  if (!productsIds) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"productsIds" is required' });
  }
  if (error?.message.includes('must be an array')) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }

  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }

  next();
};

export default validOrder;