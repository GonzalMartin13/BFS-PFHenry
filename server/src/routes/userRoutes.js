const { handlerLog } = require('../handlers/handlerLog');
const { handlerRegister } = require('../handlers/handlerRegister');
const { handlerGetProfile, handlerPutProfile } = require('../handlers/handlerProfile')
const { getAllUsersHandler } = require("../handlers/getAllUsersHandler")
const { handlerUserByName } = require('../handlers/handlerUserByName');

const { Router } = require("express");
const { putHandlerUser } = require("../handlers/putHandlerUser");
// LINEA PARA LA EXPORTACION DE HANDLERS
const users = Router()

users.get('/', getAllUsersHandler)
// Autenticación y Registro de Usuarios
users.post('/register', handlerRegister); //body
users.put('/log', handlerLog); //body

// Gestión de Usuarios
users.get('/profile', handlerGetProfile); // query
users.put('/profile', handlerPutProfile);
users.put("/user/:ID", putHandlerUser); // query + body 
//users.delete('/profile'/* handler */,); // query

// Dashboard
users.get('/dashboard', getAllUsersHandler);
users.get('/name', handlerUserByName)
module.exports = users