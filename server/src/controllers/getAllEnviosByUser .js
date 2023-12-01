const { Package, User } = require('../db');

const getAllEnviosByUser = async (userID) => {
  try {
    const user = await User.findByPk(userID, {
      include: [Package],
    });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    // Verificar que 'Packages' existe en el objeto 'user'
    if (!user.Packages) {
      throw new Error('No se encontraron paquetes para este usuario');
    }

    return user.Packages;
  } catch (error) {
    throw new Error('Error interno del servidor');
  }
};

module.exports = { getAllEnviosByUser };