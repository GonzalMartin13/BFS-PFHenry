const {Router} = require("express")
const cotizarHandler = require("../handlers/enviospost")
const envios = Router()

envios.get("/:id", /* HANDLER DE BUSQUEDA DE ENVIO */ ) // req.params
envios.post("/", cotizarHandler) //req.body
envios.delete("/id", /* HANDLER PARA ELIMINAR EL PEDIDO*/) // req.params
module.exports = envios;