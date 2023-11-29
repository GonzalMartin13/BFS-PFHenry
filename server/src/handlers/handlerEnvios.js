const { postEnvio } = require('../controllers/postEnvio')
const {getEnvioID} = require("../controllers/envioIDControler")

const handlerGetEnvioXID = async (req, res) => {
    const { id } = req.params
    try {
        const response = await getEnvioID(id);
        !response ? res.status(400).json({ error: `No se encontro el Id: ${id}` })
            : res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/*  endpoint: http://localhost:3001/envios/:id
 tipo: post
 devuelve: envio completo
 */


const handlerPostEnvio = async(req, res) => {
    const {origen,destino,largo,ancho,alto,peso,servicios,total,imagen,dni,userID} = req.body;
    const dimensiones = (largo * ancho * alto)
    try {
        const response = await postEnvio(origen,destino,dimensiones,servicios,peso,total,imagen,dni,userID);

        !response ? res.status(400).json({ error: 'Falta informacion' })
            : res.status(201).json({message: 'Envio creado con exito', "id del envio":response});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/*  endpoint: http://localhost:3001/envios/
 tipo: post
 devuelve: numero de id de envio
 */


module.exports = {
    handlerGetEnvioXID,
    handlerPostEnvio
};