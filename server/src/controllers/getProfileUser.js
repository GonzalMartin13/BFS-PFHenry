// actualizar informacion de usuario(posiblemente al olvidar contraseña)//

const {User} = require("../db");

const getProfileUser = async(name) => {
  try {
    if(name) {
      const userFound = await User.findAll({where: {name: name}});
      if (userFound) {
        return userFound;
      } else {
        throw Error (`Usuario con name ${name} no encontrado`);
      };
    };
    throw Error("Name no recibido")
  } catch (error) {
    return "Error al buscar usuario";
  };
};

module.exports = {
  getProfileUser
};