async function create(name, email, password, typeOfUser) {

  try {
    const user = await findByEmail(email, typeOfUser);

    if (user) {

    }
  } catch (error) {

  }
};

export default {
  create,
};
