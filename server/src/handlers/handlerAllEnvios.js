const {getAllPackage} = require ('../controllers/getAllPackage');


const handlerAllEnvios = async (req, res) => {

    try {
        const response = await getAllPackage();
        !response ? res.status(404).json({ error: 'No se encontraron Envios' })
            : res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { handlerAllEnvios }