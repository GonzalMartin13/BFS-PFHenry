const { Package } = require("../db");

const actualizarEstado = async() =>{
    console.log("(*)(*)")
    const envios = await Package.findAll()
    console.log(envios)
    if (envios.length === 0){
        throw new Error ("No existen envios cargados")
    }
    
    envios.forEach(async (envio) => {
        switch(envio.status){
            case "Pendiente":
                envio.status = "En tránsito"
                break;
            case "En tránsito":
                envio.status = 'Entregado'
                break;
            default:
                break;
        }
    await envio.save()
    });
    
    console.log("estados actualizados")
    console.log(envios)
    
    return envios
}

module.exports= actualizarEstado;
