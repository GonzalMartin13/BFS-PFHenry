const { User } = require("../db");

const getAllUsers = async () => {

  const response = await User.findAll();

const allUser = response.map(user => {
  const {ID, name, lastName, phone, address, email } = user;
return {
  ID,
  name,
  lastName,
  phone,
  address,
  email,
}
})  
return allUser;
};

const putUserController = async (user) => {
	const data = await User.update(user, {
		where: { id: user.id },
	});

	if (!data) {
		return "User Not Founded";
	}

	return data[0];
};

const getUserByName = async (name) => {

  const response = await User.findAll();
  //console.log('EN LA USER: ', response);
  const resName = response.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
const userName = resName.map(user => {
  const { ID, name, lastName, phone, address, email, nickname, picture} = user;
  return{ID, name, lastName, phone, address, email, nickname, picture}
})

  return userName;

};

module.exports = {
  getAllUsers,
  getUserByName
};