const { pagosControler, succesControler, pendienteControler } = require("../controllers/pagosControler")

const getPagosHandler = async (req, res) =>{
    const {servicios, total} = req.body
    console.log(typeof(total, total))
    try{
        const response = await pagosControler(servicios, total)
        res.status(200).json(response)
    } catch (error){
        res.status(404).json(error.message)
    }
}

const getSuccesHandler = async (req, res) =>{
    try{
        const response = await succesControler()
        res.status(200).json(response)
    } catch (error){
        res.status(404).json(error.message)
    }
}

const getPendienteHandler = async (req, res) =>{
    try{
        const response = await pendienteControler()
        res.status(200).json(response)
    } catch (error){
        res.status(404).json(error.message)
    }
}

module.exports = {
    getPagosHandler,
    getSuccesHandler,
    getPendienteHandler
}