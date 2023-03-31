import Joi from "joi";

const paramSchema = Joi.object({
  doctorName: Joi.string().trim().min(1).max(100),
  specialization: Joi.string().trim().min(1).max(50),
  district: Joi.string().trim().min(1).max(100),
  city: Joi.string().trim().min(1),
  state: Joi.string().trim().min(1),
});

export default paramSchema;
