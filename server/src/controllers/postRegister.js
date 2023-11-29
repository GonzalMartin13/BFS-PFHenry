// guardar en base de datos lo recibido por el form de registro//

const {User} = require("../db");

const postRegister = async(name, lastName, phone, address, email, password) => {
  try {
    if (name && lastName && phone && address && email && password) {
      const nuevoUser = await User.create({name, lastName, phone, address, email, password, connect: false});
      return nuevoUser;
    } 
    throw Error ("Datos no recibidos completamente");
  } catch (error) {
    return (error.message);
  };
};

module.exports = {
  postRegister
};



