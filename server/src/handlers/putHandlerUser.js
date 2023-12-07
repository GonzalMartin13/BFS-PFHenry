const {
	putUserController,
} = require("../controllers/getControllers/getUserController");

const putHandlerUser = async (req, res) => {
	const { ID, name, lastName, phone, address, email, nickname, enabled } =
		req.body;
	if (ID) {
		const updatedUser = await putUserController({
			ID: ID,
			name: name,
			lastName: lastName,
			phone: phone,
			address: address,
			email: email,
			nickname: nickname,
			enabled: enabled,
		});

		return res.status(200).json(updatedUser);
	} else {
		return res.status(400).json({
			error:
				error.message + "No se envio correctamente la informacion al servidor",
		});
	}
};

module.exports = { putHandlerUser };
