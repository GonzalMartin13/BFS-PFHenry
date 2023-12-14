const { getUserByName } = require('../controllers/getUsers');

const handlerUserByName = async (req, res) => {
  const { email } = req.query;
    //console.log('este el el nombre a buscar: ',name)    
        
    try {
        const response = await getUserByName(email);
                               
        !response.length
            ? res.status(404).json({ error: `No se encontro el usuario con el nombre: ${name}` })
            : res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};


module.exports = { handlerUserByName }