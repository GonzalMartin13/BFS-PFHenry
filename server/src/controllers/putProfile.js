// actualizar informacion de usuario(posiblemente al olvidar contraseña)//

const {User} = require("../db");

const putProfile = async(name, lastName, phone, email, nickname) => {
  try {
    if(name, lastName, phone, email, nickname) {
      const userFound = await User.findOne({where: {email: email}});
      if (userFound) {
        const cellphone = Number(phone);
        const userUpdated = await userFound.update({name: name, lastName: lastName, phone: cellphone, nickname: nickname});
        if(userUpdated) {
          return userUpdated;
        };
      } else {
        throw Error (`Usuario con email ${email} no encontrado`);
      };
    };
    throw Error("Datos no recibidos completamente")
  } catch (error) {
    return "Error al actualizar el usuario";
  };
};

module.exports = {
  putProfile
};