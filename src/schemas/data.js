import Joi from "joi";

const dayPattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
const hourPattern = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;

const specializationSchema = Joi.object({
  name: Joi.string().trim().min(1).max(100).required(),
});

const dateSchema = Joi.object({
  start: Joi.string().trim().min(1).max(5).regex(new RegExp(hourPattern)).required(),
  finish: Joi.string().trim().min(1).max(5).regex(new RegExp(hourPattern)).required(),
  day: Joi.string().trim().min(1).max(10).regex(new RegExp(dayPattern)).required(),
  avaliable: Joi.boolean().required(),
});

export { specializationSchema, dateSchema };
