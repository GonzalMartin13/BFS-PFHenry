const {Package} = require("../db")

const getEnvioID = async (id) => {
    const envioEncontrado = await Package.findByPk(id)

    return envioEncontrado
}

module.exports = { getEnvioID }