const { Router } = require('express');
const userRoutes = require("./userRoutes")
const enviosRoutes = require("./enviosRoutes")
const direccionesRoutes = require("./direccionRoutes")
const ubicacionesRoutes = require("./ubicacionesRoutes");
const router = Router();


// Autenticación y Registro de Usuarios
router.use("/user", userRoutes)

// Envío de Paquetes
router.use("/envios", enviosRoutes)

// Direcciones y locaciones
router.use("/direcciones", direccionesRoutes)

// Ubicaciones
router.use("/ubicaciones", ubicacionesRoutes)

module.exports = router;