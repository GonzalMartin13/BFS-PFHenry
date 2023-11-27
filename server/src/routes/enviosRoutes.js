const {handlerGetEnvio} = require('../handlers/handlerEnvios');
const {handlerPostEnvio} = require('../handlers/handlerEnvios')

const {Router} = require("express")
const cotizarHandler = require("../handlers/enviospost")
const envios = Router()

envios.get("/:id", /* HANDLER DE BUSQUEDA DE ENVIO */ ) // req.params
envios.delete("/id", /* HANDLER PARA ELIMINAR EL PEDIDO*/) // req.param
envios.get("/:id",handlerGetEnvio) // req.params
envios.post("/", handlerPostEnvio) //req.body
//envios.delete("/id", /* HANDLER PARA ELIMINAR EL PEDIDO*/) // req.params
envios.post("/price", cotizarHandler) 

module.exports = envios;