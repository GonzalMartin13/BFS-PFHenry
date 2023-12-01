/* const { Admin } = require("../db"); 

const createAdmin = async (req, res) => {
    try {
      const { name, email } = req.body;
  
      const admin = await Admin.create({
        name,
        email,
      });
      res.status(201).json(admin);

    } catch (error) {
      console.error(error);
      res.status(500).send('Error en el servidor');
    }
  };
  
  module.exports = {
    createAdmin,
  }; */