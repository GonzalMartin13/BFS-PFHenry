const contolerPrecio = require("../controllers/controlerPrecio")
const cotizarHandler = async(req, res) =>{
    const {origen, destino, largo, ancho, alto, peso, servicios} = req.body
    const volumen = (ancho * largo * alto);
    try{
        const precioFinal = await contolerPrecio(origen, destino, volumen, peso, servicios)
        res.status(200).json(precioFinal)
    } catch (error){
        return console.log(error.message)
    }

}

module.exports = cotizarHandler


// ruta: http://localhost:3001/envios/ 
// tipo: POST