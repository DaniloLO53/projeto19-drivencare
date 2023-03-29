import { CONFLICT, INTERNAL_SERVER_ERROR } from "./codes.js";

function conflict(message) {
  const exception = new Error(message);

  exception.code = CONFLICT;

  return exception;
};

function internalServerError(message) {
  const exception = new Error(message);

  exception.code = INTERNAL_SERVER_ERROR;

  return exception;
};

// it chains customException prototype with Error prototype
// now customException returns a real error
conflict.prototype = Object.create(Error.prototype);
internalServerError.prototype = Object.create(Error.prototype);

export default {
  conflict,
  internalServerError
};
