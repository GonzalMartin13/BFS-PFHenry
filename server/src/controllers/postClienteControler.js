const controlerContacto = async (name, phone, mail, message) => {
  const nuevoCliente = {
    nombre: name,
    telefono: phone,
    correo: mail,
    mensaje: message,
  };
  return { nuevoCliente };
};

module.exports = controlerContacto;
