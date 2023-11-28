const {handlerGetEnvioXID, handlerPostEnvio, handlerGetEnvio} = require('../handlers/handlerEnvios');
const {Router} = require("express")
const cotizarHandler = require("../handlers/enviospost")
const envios = Router()

envios.post("/price", cotizarHandler) 
envios.post("/", handlerPostEnvio) //req.body
envios.get("/", handlerGetEnvio ) // req.query
envios.get("/:id",handlerGetEnvioXID) // req.params
envios.delete("/id", /* HANDLER PARA ELIMINAR EL PEDIDO*/) // req.param

module.exports = envios;