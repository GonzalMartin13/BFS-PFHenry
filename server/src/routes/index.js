const { Router } = require('express');
const userRoutes = require("./userRoutes")
const enviosRoutes = require("./enviosRoutes")
const direccionesRoutes = require("./direccionRoutes")
const clientesRoutes = require("./ubicacionesRoutes");
const adminRoutes = require("./adminRoutes");
const router = Router();


// Autenticación y Registro de Usuarios
router.use("/user", userRoutes)

// Envío de Paquetes
router.use("/envios", enviosRoutes)

// Direcciones y locaciones
router.use("/direcciones", direccionesRoutes)

// Ubicaciones
router.use("/clientes", clientesRoutes)

// Dashboard
/* router.use("/dashboard", userRoutes) */ // Para traerme todos los usuarios al Dashboard

// para traer a los Administradores al Dashboard
/* router.use("/admin", adminRoutes) */

module.exports = router;