

const handlerLog= async (req, res) => {

    const {
      email,
      password  
        } = req.body;

    try {
        const response = await postLogin(
           email,
           password  
        );
        !response ? res.status(400).json({ error: error.message })
            : res.status(201).json(response);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



module.exports = { 
    handlerLog
};