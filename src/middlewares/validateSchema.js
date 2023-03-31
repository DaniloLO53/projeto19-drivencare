import codes from "../utils/constants/codes.js";

export function validateSchema(schema, byParams = false) {
  return (request, response, next) => {
    const { error } = schema.validate(request[byParams ? "query" : "body"], {
      abortEarly: false,
    });
    if (error) {
      console.log(error.message);
      return response
        .status(codes.UNPROCESSABLE_ENTITY)
        .send(error?.details?.map((detail) => detail.message) || error);
    }

    next();
  };
}
