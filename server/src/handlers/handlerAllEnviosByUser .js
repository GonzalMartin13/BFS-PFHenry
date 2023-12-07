// handlers/handlerAllEnviosByUser.js
const { getAllEnviosByUser } = require('../controllers/getAllEnviosByUser ');

const handlerAllEnviosByUser = async (req, res) => {
  const userEmail = req.params.userEmail; // Cambiar de userID a userEmail

  try {
    const userPackages = await getAllEnviosByUser(userEmail);
    res.status(200).json(userPackages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { handlerAllEnviosByUser };