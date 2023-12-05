const { Admin } = require("../db"); 

const createAdmin = async (req, res) => {
    try {
      const { nameAdmin, emailAdmin } = req.body;

      console.log(nameAdmin, emailAdmin)

      const oldAdmin = await Admin.findOne({
        where: {nameAdmin: nameAdmin, emailAdmin: emailAdmin}
      });

      if (oldAdmin) {
        res.status(201).json(oldAdmin);

      } else {
        const newAdmin = await Admin.create({
          nameAdmin,
          emailAdmin,
        });
        res.status(201).json(newAdmin); 

      };

    } catch (error) {
      console.error(error);
      res.status(500).send('Error en el servidor');
    }
  };
  
  module.exports = { createAdmin };
  