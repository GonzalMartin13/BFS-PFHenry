const { postEnvio } = require('../controllers/postEnvio')

const handlerGetEnvio = async (req, res) => {
    const { id } = req.params
    try {
        const response = await getEnvio(id);
        !response ? res.status(400).json({ error: `No se encontro el Id: ${id}` })
            : res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const handlerPostEnvio = async(req, res) => {
    const {origen,destino,largo,ancho,alto,peso,servicios,total,imagen,dni} = req.body;
    const dimensiones = (largo * ancho * alto)
    try {
        const response = await postEnvio(origen,destino,dimensiones,servicios,peso,total,imagen,dni);

        !response ? res.status(400).json({ error: 'Falta informacion' })
            : res.status(201).json({message: 'Envio creado con exito', "id del envio":response});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    handlerGetEnvio,
    handlerPostEnvio
};