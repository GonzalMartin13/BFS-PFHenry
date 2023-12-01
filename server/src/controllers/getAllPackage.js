
const { Package, User } = require('../db');


const getAllPackage = async () => {

const response = await Package.findAll();

const mapResponse = response.map(us => {
    const {origen,destino,dimensiones,servicios,peso,total,imagen,dni,UserID} = us;
    return {
        origen,destino,dimensiones,servicios,peso,total,imagen,dni, UserID
    }
})
  return mapResponse;
};


module.exports = { getAllPackage };

//http://localhost:3001/envios  endPoint de busqueda