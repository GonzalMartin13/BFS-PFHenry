const { Package, User } = require("../db");

const getAllPackage = async () => {
  const response = await Package.findAll();
  console.log("todos en la db", response);
  const mapResponse = response.map((us) => {
    const {
      id,
      origen,
      destino,
      dimensiones,
      servicios,
      peso,
      total,
      imagen,
      dni,
      status,
      UserID,
    } = us;
    return {
      id,
      origen,
      destino,
      dimensiones,
      servicios,
      peso,
      total,
      imagen,
      dni,
      status,
      UserID,
    };
  });
  return mapResponse;
};

module.exports = { getAllPackage };

//https://bfs-pfhenry-production.up.railway.app/envios  endPoint de busqueda