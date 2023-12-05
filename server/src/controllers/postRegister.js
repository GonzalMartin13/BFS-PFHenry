// guardar en base de datos lo recibido por el form de registro//

const { User } = require("../db");

const postRegister = async (name, lastName, phone, email, nickname, picture) => {
  try {
    if (name && lastName && phone && email && nickname && picture ) {
      const userFound = await User.findOne({
        where: {name: name, lastName: lastName, phone: phone, email: email, nickname: nickname, picture: picture },
      });

      if (userFound) {
        return userFound;
      } else {
        const userCreated = await User.create({
          name,        
          lastName,    
          phone,
          email,
          nickname,
          picture,        
          connect: false
        });
        return userCreated;
      }
    }
    throw Error("Datos no recibidos completamente");
  } catch (error) {
    console.log(error);
    return "Error al registrar usuario";
  }
};

module.exports = {
  postRegister,
};

