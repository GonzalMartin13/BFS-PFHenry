const contolerPrecio = require("../controllers/controlerPrecio")

const cotizarHandler = async(req, res) =>{
    const {origen, destino, largo, ancho, alto, peso, servicios} = req.body
    const volumen = (ancho * largo * alto);
    try{
        const precioFinal = await contolerPrecio(origen, destino, volumen, peso, servicios)
        res.status(200).json(precioFinal)
    } catch (error){
        console.log(error.message)
        res.status(404).send(error.message)
    }

}

module.exports = cotizarHandler


/*  endpoint: http://localhost:3001/envios/price
 tipo: post
 devuelve: devuelve el precio del envio
 */
