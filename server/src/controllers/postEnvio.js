const { Package, User } = require('../db');

const postEnvio = async (origen, destino, dimensiones, servicios, peso, total, imagen, dni, destinatario, user) => {
  try {
    // Crear el paquete
    const crearEnvio = await Package.create({
      origen,
      destino,
      dimensiones,
      servicios,
      peso,
      total,
      imagen,
      destinatario,
      dni,
    });

    // Obtener el usuario asociado al paquete
    const usuario = await User.findOne({ where: { name: user } });

    // Asignar el paquete al usuario
    await crearEnvio.setUser(usuario);

    return { success: true, message: 'Envío creado exitosamente' };
  } catch (error) {
    console.error(error.message);
    return { success: false, error: 'Error al crear el envío' };
  }
};

module.exports = { postEnvio };
