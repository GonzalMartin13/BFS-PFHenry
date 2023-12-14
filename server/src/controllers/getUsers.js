const { User } = require("../db");

const getAllUsers = async () => {

  const response = await User.findAll();

const allUser = response.map(user => {
  const {ID, name, lastName, phone, address, email,isBanned } = user;
return {
  ID,
  name,
  lastName,
  phone,
  address,
  email,
  isBanned
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

const getUserByName = async (email) => {

  const response = await User.findByPk(email);
  //console.log('EN LA USER: ', response);
  const resName = response.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
const userName = resName.map(user => {
  const { ID, name, lastName, phone, address, email, nickname, picture, isBanned} = user;
  return{ID, name, lastName, phone, address, email, nickname, picture, isBanned}
})

  return userName;

};

module.exports = {
  getAllUsers,
  getUserByName
};