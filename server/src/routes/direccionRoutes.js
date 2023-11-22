const {Router} = require("express")
// IMPORTAR LOS HANDLERS ACA
const direcciones = Router();

direcciones.post("/", /* HANDLER PARA CREAR DIRECCION*/) // REQ BODY
direcciones.put("/:id", /* HANDLER PARA EDITAR LA DIREC*/) // REQ BODY
direcciones.delete("/:id", /*HANDLER PARA ELIMINAR UNA DIREC*/) //REQ PARAMS

module.exports = direcciones