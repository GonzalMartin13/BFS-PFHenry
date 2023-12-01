const {getAllEnviosByUser} =require("../controllers/getAllEnviosByUser ") 

const handlerAllEnviosByUser = async (req, res) => {
    const userID = req.params.userID;
  
    try {
      const userPackages = await getAllEnviosByUser(userID);
      res.status(200).json(userPackages);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };


module.exports = { handlerAllEnviosByUser };