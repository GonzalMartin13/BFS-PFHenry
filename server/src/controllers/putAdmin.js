const { Admin } = require('../db'); // Asegúrate de que la ruta sea correcta

const putAdmin = async (req, res) => {
  const { adminId } = req.params;
  console.log('adminId:', adminId);

  try {
    // Encuentra el administrador por su ID
    const admin = await Admin.findByPk(adminId);

    if (!admin) {
      return res.status(404).json({ error: 'Administrador no encontrado' });
    }

    // Cambia el estado de activación
    admin.isActive = !admin.isActive;

    // Guarda los cambios en la base de datos
    await admin.save();

    return res.status(200).json({ message: 'Estado de activación actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar el estado de activación:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  putAdmin,
};