const { getAllUsers } = require("../controllers/getUsers");

const getAllUsersHandler = async (req, res) => {
  try {
    const users = await getAllUsers();

    res.status(200).json(users);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { getAllUsersHandler };
