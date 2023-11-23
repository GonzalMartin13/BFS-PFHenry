const {handlerGetEnvio} = require('../handlers/handlerEnvios');


const {Router} = require("express")
const cotizarHandler = require("../handlers/enviospost")
const envios = Router()


envios.get("/:id", /* HANDLER DE BUSQUEDA DE ENVIO */ ) // req.params
envios.post("/", cotizarHandler) //req.body
envios.delete("/id", /* HANDLER PARA ELIMINAR EL PEDIDO*/) // req.param
envios.get("/:id",handlerGetEnvio) // req.params
envios.post("/", /* HANDLER PARA CREAR UN ENVIO*/) //req.body
//envios.delete("/id", /* HANDLER PARA ELIMINAR EL PEDIDO*/) // req.params
envios.get("/price", /* HANDLER PRECIO */) 

module.exports = envios;