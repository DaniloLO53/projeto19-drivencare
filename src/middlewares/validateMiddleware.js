import codes from "../utils/codes.js";

export function validateSchema(schema) {
  return (request, response, next) => {
    const { error } = schema.validate(request.body, { abortEarly: false });

    if (error) {
      return response
        .status(codes.UNPROCESSABLE_ENTITY)
        .send(error.details.map((detail) => detail.message));
    }

    next();
  };
}
