const {Router} = require("express")

const {getPagosHandler, getSuccesHandler, getPendienteHandler, fallidaHandler, getWebHook} = require("../handlers/handlerPagos")

const pagos = Router()

pagos.post("/crear", getPagosHandler) 

pagos.get("/exitosa", getSuccesHandler) 

pagos.get("/pendiente", getPendienteHandler) 

pagos.get("/fallida", fallidaHandler) 

pagos.post("/webhook", getWebHook) 

module.exports = pagos