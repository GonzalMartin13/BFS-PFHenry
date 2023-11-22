// actualizar informacion de usuario(posiblemente al olvidar contraseña)//

const {User} = require("../db");

const putProfile = async(email, password) => {
  try {
    if(email, password) {
      const userFound = await User.findOne({where: {email: email}});
      if (userFound) {
        await userFound.update({password: password});
        return "Contraseña actualizada"
      } else {
        throw Error (`Usuario con email ${email} no encontrado`);
      };
    };
    throw Error("Datos no recibidos completamente")
  } catch (error) {
    return "Error al actualizar la contraseña";
  };
};

module.exports = {
  putProfile
};