const { postEnvio } = require('../controllers/postEnvio')

const handlerGetEnvio = async (req, res) => {
    const { id } = req.params
    try {
        const response = await getEnvio(id);
        !response ? res.status(400).json({ error: `No se encontro el Id: ${id}` })
            : res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const handlerPostEnvio = async (req, res) => {
    const {
        weight,                 // package
        dimensions,             //package
        service,                //package
        deliveryInstructions,   //package
        photoUrl,               //package
        name,                       //chipment
        email,                      //chipment
        phone,                      //chipment
        province,                   //chipment
        city,                       //chipment
        status,                  //chipment
        estimatedDeliveryDate,    //chipment
        nameReceive,            // receive
        povinceReceive,         // receive
        cityReceive,            // receive
        phoneReceive,           // receive
        emailReceive           // receive

    } = req.body;

    try {
        const response = await postEnvio(
            weight,                 // package
            dimensions,             //package
            service,                //package
            deliveryInstructions,   //package
            photoUrl,               //package
            name,                       //chipment
            email,                      //chipment
            phone,                      //chipment
            province,                   //chipment
            city,                       //chipment
            status,                  //chipment
            estimatedDeliveryDate,    //chipment
            nameReceive,            // receive
            povinceReceive,         // receive
            cityReceive,            // receive
            phoneReceive,           // receive
            emailReceive           // receive

        );

        !response ? res.status(400).json({ error: 'Falta informacion' })
            : res.status(201).json({message: 'Envio creado con exito'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    handlerGetEnvio,
    handlerPostEnvio
};