// controllers/getAllEnviosByUser.js
const { Package, User } = require('../db');

const getAllEnviosByUser = async (userEmail) => {
  
    const user = await User.findOne({
      where: { email: userEmail },
      include: [Package],
    });

   return user.Packages;

  
};

module.exports = { getAllEnviosByUser };
