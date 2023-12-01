// getAdminHandlers.js
const { getAllAdmin } = require("../controllers/adminControllers");

const getAllAdminsHandler = async (req, res) => {
  try {
      const admins = await getAllAdmin();
      res.status(200).json(admins);
    }catch (error) {
     res.status(400).send({ error: error.message });
  }
};

module.exports = { getAllAdminsHandler };
