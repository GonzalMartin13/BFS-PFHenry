const {Router} = require("express")
// IMPORTAR ACA LOS HANDLERS// 
const envios = Router()

envios.get("/:id",) // req.params
envios.post("/", /* HANDLER PARA CREAR UN ENVIO*/) //req.body
envios.delete("/id", /* HANDLER PARA ELIMINAR EL PEDIDO*/) // req.params
envios.get("/price", /* HANDLER PRECIO */) 
module.exports = envios;