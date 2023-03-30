export function validateSchema(schema) {
  return (request, response, next) => {
    const { error } = schema.validate(request.body, { abortEarly: false });
    if (error) {
      return response.status(422).send(error.details.map((detail) => detail.message));
    }

    next();
  };
}
