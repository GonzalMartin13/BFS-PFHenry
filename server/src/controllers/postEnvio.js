const {Package} = require ('../db');

const postEnvio = async (origen,destino,dimensiones,servicios,peso,total,imagen,dni,destinatario )=>{
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
})
    if (!crearEnvio){
        throw new Error({message:`no se creo`})
    }
return crearEnvio.id;
};



module.exports = {postEnvio};