const { pagosControler, succesControler, pendienteControler, fallidaControler, webHookControler } = require("../controllers/pagosControler")

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
// endpoint: http://https://bfs-pfhenry-production.up.railway.app/pagos/crear
// Tipo : POST // Pide: total y  tipo de servico
// Devuelve: link de pago para redirecionar al cliente

const getSuccesHandler = async (req, res) => {
    try{
        const response = await succesControler(req.query)
        res.status(200).json(response)
    } catch (error){
        res.status(404).json(error.message)
    }
}
// endpoint: http://https://bfs-pfhenry-production.up.railway.app/pagos/exitosa
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
// endpoint: http://https://bfs-pfhenry-production.up.railway.app/pagos/pendiente
// Tipo : GET // 
// Devuelve:

const fallidaHandler = async(req, res) => {
    try{
        const responde = await fallidaControler(req.query)
        res.status(200).json(responde)
    } 
    catch (error){
        console.log('Error en la peticion webhook', error);
        res.status(404).send(error.message)
    }
}
// endpoint: http://https://bfs-pfhenry-production.up.railway.app/pagos/fallida
// Tipo : GET // 
// Devuelve:

const getWebHook = async(req, res) => {
    try{
        const responde = await webHookControler()
        res.status(200).json(responde)
    } 
    catch (error){
        console.log('Error en la peticion webhook', error);
        res.status(404).send(error.message)
    }
}
// endpoint: http://https://bfs-pfhenry-production.up.railway.app/pagos/webhook
// Tipo : POST // 
// Devuelve:

module.exports = {
    getPagosHandler,
    getSuccesHandler,
    getPendienteHandler,
    getWebHook,
    fallidaHandler
}

