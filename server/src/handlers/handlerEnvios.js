

const handlerGetEnvio = async(req, res)=>{
    const {id} = req.params
    try {
        const response = await getEnvio(id);
        !response ? res.status(400).json({error: `No se encontro el Id: ${id}`})
        : res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


// const handlerPostEnvio = async(req, res)=>{
//     const {
// weight,
// dimensions,
// fragile,
// description,       //PENDIENTE PREGUNTAR SEGUN LO QUE TENGO EN EL CUADERNO
// city,                  // SOLO TENGO ESTO PENDIENTE DE ESTA HOJA 
// province,
// destination,
// name, 

//     } = req.body;

//     try {
//         const response = await postEnvio();  // aca tambien debe ir la misma info del req.body
//         !response ? res.status(400).json({error: 'Falta informacion'})
//         : res.status(201).json(response);
//     } catch (error) {
//         res.status(500).json({error: error.message});
//     }
// };


// const handlerDeletEnvio = async(req, res)=>{
//     const {id} = req.params;
//     try {
//         const response = await deletEnvio(id);
//         !response ? res.status(400).json({error: `No se encontro el Id: ${id}`})
//         : res.status(200).json({message: `Se ha eliminado el pedido con el ID: ${id}`}); 
//     } catch (error) {
//         res.status(500).json({error: error.message});
//     }

// };


module.exports = {
    //handlerDeletEnvio,
    handlerGetEnvio,
    //handlerPostEnvio
};