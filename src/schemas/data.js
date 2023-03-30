import Joi from "joi";

const dayPattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
const hourPattern = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;
const uuidPattern =
  /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[8|9|aA|bB][a-f0-9]{3}-[a-f0-9]{12}$/i;

const specializationSchema = Joi.object({
  name: Joi.string().trim().min(1).max(100).required(),
});

const dateSchema = Joi.object({
  start: Joi.string()
    .trim()
    .min(1)
    .max(5)
    .regex(new RegExp(hourPattern))
    .error((error) => new Error(error))
    .required(),
  finish: Joi.string()
    .trim()
    .min(1)
    .max(5)
    .regex(new RegExp(hourPattern))
    .error((error) => new Error(error))
    .required(),
  day: Joi.string()
    .trim()
    .min(1)
    .max(5)
    .regex(new RegExp(dayPattern))
    .error((error) => new Error(error))
    .required(),
  avaliable: Joi.boolean().required(),
  doctor_uuid: Joi.string()
    .trim()
    .min(1)
    .regex(new RegExp(uuidPattern))
    .error((error) => new Error(error))
    .required(),
});

export { specializationSchema, dateSchema };
