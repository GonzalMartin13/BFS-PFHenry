const { Router } = require('express');
const userRoutes = require("./userRoutes")
const enviosRoutes = require("./enviosRoutes")
const direccionesRoutes = require("./direccionRoutes")
const clientesRoutes = require("./ubicacionesRoutes");
const pagosRoutes =require("./pagosRoutes")
const adminRoutes = require("./adminRoutes");
const reviewsRoutes = require ("./reviewsRoutes");

const router = Router();


// Autenticación y Registro de Usuarios
router.use("/user", userRoutes)

// Envío de Paquetes
router.use("/envios", enviosRoutes)

// Direcciones y locaciones
router.use("/direcciones", direccionesRoutes)

// clientes
router.use("/clientes", clientesRoutes)

// Pasarela De Pagos
router.use("/pagos", pagosRoutes)

// Dashboard user
router.use("/dashboard", userRoutes) 

// Dashboard post, get y put
router.use("/admin", adminRoutes) 

// Reviews post y get
router.use("/reviews", reviewsRoutes)


module.exports = router;