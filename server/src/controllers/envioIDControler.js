const {Package, User} = require("../db")


const getEnvioID = async (id) => {
    const envioEncontrado = await Package.findByPk(id)

    return envioEncontrado
}
const getEnvios = async (user) => {
     const enviosDeUsuario = await User.findAll({where:{
        email: user
     }}) 
    console.log(enviosDeUsuario)
    return {enviosDeUsuario}
}

module.exports = { getEnvioID, getEnvios }