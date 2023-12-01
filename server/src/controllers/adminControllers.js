/* const { Admin } = require("../db");

const getAllAdmin = async () => {

const response = await Admin.findAll();

const allAdmin = response.map(admin => {
  const {ID, name, email } = admin;
return {
  ID,
  name,
  email,
  

}
})  
return allAdmin;
};

module.exports = { getAllAdmin }; */