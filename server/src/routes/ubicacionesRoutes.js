const {Router} = require("express")
const clienteHandler = require("../handlers/clientespost")
const cliente = Router()

cliente.post("/", clienteHandler) // req body


module.exports = cliente