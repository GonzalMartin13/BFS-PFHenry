const {Router} = require("express")
// IMPORTAR HANDLERS//
const ubication = Router()

ubication.get("/", /* HANDLER PAR ATRAER TODAS LAS LOC*/) 
ubication.get("/search", /* HANDLER PARA BUSCAR UNA UBICACION ESPECIFICA*/ ) //REQ QUERY
ubication.get("/:id", /* HANDLER PARA TRAER LA INFO ESPECIFICA DE LA UBICACION */) // req params
ubication.post("/", /* HANDLER PARA AGREGAR UNA UBICACION NUEVA */) // req body
ubication.put("/", /*HANDLER PARA EDITAR UNA UBICACION */) // req body
ubication.delete("/", /* HANDLER PARA ELIMINAR UNA UBICACION */) // REQ.BODY

module.exports = ubication