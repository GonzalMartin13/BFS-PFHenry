const {eliminarEnvio} = require("../controllers/borrarControler")

const handlerBorrar = async(req, res) =>{
    const {id} = req.params
    try {
        await eliminarEnvio(id)
        res.status(204).send({message: 'envio borrado'})
    } catch (error){
        console.log('Error al borrar envio', error);
        res.status(500).send({message:'Error en el servidor'});
    };
}

// Endpoint: https://bfs-pfhenry-production.up.railway.app/envios/eliminar/:id
// Tipo: DELETE -- Pide UUID por parametro
// Devuelve: Mensaje de confirmacion de borrado

module.exports= {handlerBorrar}