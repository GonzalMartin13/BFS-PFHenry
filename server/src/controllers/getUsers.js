const {User} = require("../db");

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

module.exports = { getAllUsers };