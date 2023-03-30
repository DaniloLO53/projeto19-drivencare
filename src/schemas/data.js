import Joi from "joi";

const specializationSchema = Joi.object({
  name: Joi.string().trim().min(1).max(100).required(),
});

export { specializationSchema };
