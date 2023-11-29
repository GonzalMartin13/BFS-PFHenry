const {Package, User} = require ('../db');

const postEnvio = async (origen,destino,dimensiones,servicios,peso,total,imagen,dni, userID )=>{
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
if (userID){
    console.log('EL USER: ',userID)
const addUser = await User.findByPk(userID);  
console.log('PARA RELACIONAR: ',addUser);

    await crearEnvio.setUser(addUser);
}

return `Su envio a sido creado con la guia: ${crearEnvio.id}`;
};



module.exports = {postEnvio};