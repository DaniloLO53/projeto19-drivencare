import Joi from "joi";

const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const signinSchema = Joi.object({
  email: Joi.string().trim().min(1).max(100).regex(new RegExp(emailPattern)).required(),
  password: Joi.string().trim().min(1).max(100).required(),
});

export default signinSchema;
