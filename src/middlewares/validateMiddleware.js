import { UNPROCESSABLE_ENTITY } from "../utils/codes.js";

export function validateSchema(schema) {
  return (request, response, next) => {
    const { error } = schema.validate(request.body, { abortEarly: false });

    if (error) {
      return response
        .status(UNPROCESSABLE_ENTITY)
        .send(error.details.map((detail) => detail.message));
    }

    console.log('next')

    next();
  };
}
