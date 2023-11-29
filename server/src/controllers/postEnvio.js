const { Package } = require('../db');

const postEnvio = async (origen, destino, destinatario, dimensiones, peso, servicios, total, imagen, dni, userId) => {
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
        userId, // Asigna el userId al crear el paquete
    });

    return crearEnvio.id;
};

module.exports = { postEnvio };