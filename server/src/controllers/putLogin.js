// setea el estado del usuario//

const {User} = require("../db");

const putLogin = async(email, password) => {
  try {
    if(email, password) {
      const userFound = await User.findOne({where: {email: email, password: password}});
      if (userFound) {
        await userFound.update({connect: true});
        return true;
      } else {
        return false;
      };
    };
    throw Error ("Datos no recibidos completamente");
  } catch (error) {
    return "Error al intentar setear usuario";
  };
};

module.exports = {
  putLogin
};