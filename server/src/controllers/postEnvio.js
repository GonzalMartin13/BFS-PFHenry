const {Shipment, Receive, Package} = require ('../db');

const postEnvio = async (origen,destino,dimensiones,servicios,peso,total,imagen,dni )=>{
const crearEnvio = await Package.create({
    origen,
    destino,
    dimensiones,
    servicios,
    peso,
    total,
    imagen,
    dni,
})
    if (!crearEnvio){
        throw new Error({message:`no se creo`})
    }
return crearEnvio.id;
// devolver la confirmacion de creacion de un envio y sus datos {usuario, id del envio, origen, destino, dni quien retira, img, total,}
};



module.exports = {postEnvio};