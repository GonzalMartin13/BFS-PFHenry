
const { Package, User } = require('../db');


const getAllPackage = async () => {

const response = await Package.findAll();

const mapResponse = response.map(us => {
    const {id,origen,destino,dimensiones,servicios,peso,total,imagen,dni,UserID} = us;
    return {
        id,origen,destino,dimensiones,servicios,peso,total,imagen,dni, UserID
    }
})
  return mapResponse;
};


module.exports = { getAllPackage };

//http://localhost:3001/envios  endPoint de busqueda