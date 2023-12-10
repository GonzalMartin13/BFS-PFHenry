// controllers/postEnvio.js
const { Package, User } = require("../db");

const postEnvio = async (
  origen,
  destino,
  dimensiones,
  servicios,
  peso,
  total,
  status,
  imagen,
  dni,
  UserEmail
) => {
  try {
    const crearEnvio = await Package.create({
      origen,
      destino,
      dimensiones,
      servicios,
      peso,
      total,
      status,
      imagen,
      dni,
    });

    if (UserEmail) {
      console.log("EL USER: ", UserEmail);
      const addUser = await User.findOne({ where: { email: UserEmail } });
      console.log("PARA RELACIONAR: ", addUser);

      if (addUser) {
        await crearEnvio.setUser(addUser);
      } else {
        throw new Error("Usuario no encontrado");
      }
    }
    return {
      mensaje: `Su envío ha sido creado con la guía: ${crearEnvio.id}`,      
      envio: {
        numeroEnvio: crearEnvio.id,
        status: crearEnvio.status,
      },
    };
  } catch (error) {
    throw new Error("Error interno del servidor");
  }
};

module.exports = { postEnvio };
