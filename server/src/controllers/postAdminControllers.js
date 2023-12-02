const { Admin } = require("../db"); 

const createAdmin = async (req, res) => {
    try {
      const { nameAdmin, emailAdmin } = req.body;
  
      const newAdmin = await Admin.create({
        nameAdmin,
        emailAdmin,
      });
      res.status(201).json(newAdmin);

    } catch (error) {
      console.error(error);
      res.status(500).send('Error en el servidor');
    }
  };
  
  module.exports = { createAdmin };
  