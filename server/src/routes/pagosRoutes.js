const {Router} = require("express")
const {getPagosHandler, getSuccesHandler, getPendienteHandler} = require("../handlers/handlerPagos")
const pagos = Router()

pagos.post("/crear", getPagosHandler) 

pagos.get("/exitosa", getSuccesHandler) 

pagos.get("/pendiente", getPendienteHandler) 


module.exports = pagos