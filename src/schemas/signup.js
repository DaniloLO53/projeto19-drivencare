import Joi from "joi";

const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const signupSchema = Joi.object({
  name: Joi.string().trim().min(1).max(100).required(),
  email: Joi.string().trim().min(1).max(100).regex(new RegExp(emailPattern)).required(),
  password: Joi.string().trim().min(1).required(),
  confirmPassword: Joi.ref("password"),
  is_doctor: Joi.boolean().required(),
  is_admin: Joi.boolean().required(),
});

export default signupSchema;
