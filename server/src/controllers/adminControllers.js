const { Admin } = require("../db");

const getAllAdmin = async () => {

const response = await Admin.findAll();

const allAdmin = response.map(admin => {
  const {ID, nameAdmin, emailAdmin, isActive } = admin;
    return {
      ID,
      nameAdmin,
      emailAdmin,
      isActive
    }
  })  
  return allAdmin;
};

module.exports = { getAllAdmin };