// guardar en base de datos lo recibido por el form de registro//

const {User} = require("../db");

const postRegister = async(email, nickname, picture) => {
  try {
    if (email && nickname && picture) {
      const userFound = await User.findOne({where: {email: email, nickname: nickname, picture: picture}});

      if(userFound) {
        return userFound;
      } else {
        const userCreated = await User.create({email, nickname, picture, connect: false});
        return userCreated;
      };
    };
    throw Error ("Datos no recibidos completamente");
  } catch (error) {
    return "Error al registrar usuario";
  };
};

module.exports = {
  postRegister
};
