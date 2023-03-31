import Joi from "joi";

const querySchema = Joi.object({
  name: Joi.string().trim().min(1).max(100).required(),
  specialization: Joi.string().trim().min(1).max(50),
  district: Joi.string().trim().min(1).max(100),
  city: Joi.string().trim().min(1),
  state: Joi.string().trim().min(1),
});

export default querySchema;
