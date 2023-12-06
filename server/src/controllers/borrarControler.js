const { Package } = require("../db");

const eliminarEnvio = async (id) => {
  try {
    const registro = await Package.findByPk(id);

    if (registro) {
      // Elimina el registro
      await registro.destroy();
      console.log(`Registro con UUID ${id} eliminado correctamente.`);
      return true;
    } else {
      console.log(`No se encontró el registro con UUID ${id}.`);
      return false;
    }
  } catch (error) {
    console.error("Error al intentar eliminar el registro:", error);
    throw error;
  }
};
module.exports = { eliminarEnvio };
