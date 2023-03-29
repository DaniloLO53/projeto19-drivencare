import Joi from 'joi';

const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const signupSchema = Joi.object({
  typeOfUser: Joi.string().valid('pacients','doctors').required(),
  name: Joi
    .string()
    .trim()
    .min(1)
    .required(),
  email: Joi
    .string()
    .trim()
    .min(1)
    .regex(new RegExp(emailPattern))
    .error((error) => new Error(error))
    .required(),
  password: Joi.
    string()
    .trim()
    .min(1)
    .required(),
  confirmPassword: Joi
    .ref('password')
  // .error((error) => new Error(error))
});
