import signinSchema from "../schemas/signin.schema.js";
import signupSchema from "../schemas/signup.schema.js";
import { INTERNAL_SERVER_ERROR, UNPROCESSABLE_ENTITY } from "../utils/statusCode.utils.js";

async function validate(request, response, next) {
  const user = request.body;

  try {
    const validationSignin = signinSchema.validate(user);
    const validationSignup = signupSchema.validate(user);

    if (validationSignin.error || validationSignup.error) {
      const onSignin = validationSignin.error && validationSignin.error.message;
      const onSignup = validationSignup.error && validationSignup.error.message;
  
      console.log('Error on validation: ', onSignin || onSignup);

      return response.sendStatus(UNPROCESSABLE_ENTITY);
    }

    next();
  } catch (error) {
    console.log('Error on server: ', error);

    return response.sendStatus(INTERNAL_SERVER_ERROR);
  }
};

export default validate;
