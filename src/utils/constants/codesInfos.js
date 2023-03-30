import codes from "./codes.js";
import messages from "./messages.js";

function merge() {
  const codesNames = Object.keys(codes);
  let codesInfos = {};

  codesNames.forEach((name) => {
    Object.assign(codesInfos, {
      [name]: {
        code: codes[name],
        message: messages[name],
      },
    });
  });

  return codesInfos;
}

const codesInfos = merge();

export default codesInfos;
