import codes from "./codes.js";

function conflict(message) {
  const exception = new Error(message);

  exception.code = codes.CONFLICT;

  return exception;
};

function internalServerError(message) {
  const exception = new Error(message);

  exception.code = codes.INTERNAL_SERVER_ERROR;

  return exception;
};

// it chains customException prototype with Error prototype
// now customException returns a real error
conflict.prototype = Object.create(Error.prototype);
internalServerError.prototype = Object.create(Error.prototype);

function hasValidCode(code) {
  const validCode = Object.values(codes).find((validCode) => validCode === code);

  return validCode;
};

export default {
  conflict,
  internalServerError,
  hasValidCode
};
