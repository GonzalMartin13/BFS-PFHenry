const { pagosControler, succesControler, pendienteControler } = require("../controllers/pagosControler")

const getPagosHandler = async (req, res) =>{
    const {servicios, total} = req.body
    console.log(typeof(total, total))
    try{
        const response = await pagosControler(servicios, total)
        res.status(200).json(response.init_point)
    } catch (error){
        res.status(404).json(error.message)
    }
}
// endpoint: http://localhost:3001/pagos/crear
// Tipo : POST // Pide: total y  tipo de servico
// Devuelve: link de pago para redirecionar al cliente

const getSuccesHandler = async (req, res) =>{
    try{
        const response = await succesControler()
        res.status(200).json(response)
    } catch (error){
        res.status(404).json(error.message)
    }
}
// endpoint: http://localhost:3001/pagos/exitosa
// Tipo : GET // 
// Devuelve: 

const getPendienteHandler = async (req, res) =>{
    try{
        const response = await pendienteControler()
        res.status(200).json(response)
    } catch (error){
        res.status(404).json(error.message)
    }
}
// endpoint: http://localhost:3001/pagos/pendiente
// Tipo : GET // 
// Devuelve: 


module.exports = {
    getPagosHandler,
    getSuccesHandler,
    getPendienteHandler
}