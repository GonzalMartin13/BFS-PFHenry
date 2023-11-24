const { postRegister } = require("../controllers/postRegister");

const handlerRegister = async (req, res) => {
  const {
    name,
    lastName,
    phone,
    address,
    email,
    password,
    // aca van las propiedades del modelo usuarios.
  } = req.body;

  try {
    const response = await postRegister(
      name,
      lastName,
      phone,
      address,
      email,
      password
      //  Aca tambien debe ir la informacion del modelo igual que como va en la destruc.
    );
    !response
      ? res.status(400).json({ error: error.message })
      : res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { handlerRegister };
