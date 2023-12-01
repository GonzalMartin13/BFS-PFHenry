// controllers/postEnvio.js
const { Package, User } = require('../db');

const postEnvio = async (origen, destino, dimensiones, servicios, peso, total, imagen, dni, userEmail) => {
  try {
    const crearEnvio = await Package.create({
      origen,
      destino,
      dimensiones,
      servicios,
      peso,
      total,
      imagen,
      dni,
    });

    if (userEmail) {
      console.log('EL USER: ', userEmail);
      const addUser = await User.findOne({ where: { email: userEmail } });
      console.log('PARA RELACIONAR: ', addUser);

      if (addUser) {
        await crearEnvio.setUser(addUser);
      } else {
        throw new Error('Usuario no encontrado');
      }
    }

    return `Su envío ha sido creado con la guía: ${crearEnvio.id}`;
  } catch (error) {
    throw new Error('Error interno del servidor');
  }
};

module.exports = { postEnvio };
