// // userActions.js
import axios from "axios";
import {addUser, addAdmin, updateUser} from "../Slices/userSlice"; // Asegúrate de importar addUser desde el archivo correcto

export function registerUser(postUser) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "https://bfs-pfhenry-production.up.railway.app/user/register", 
        postUser
      );
      dispatch(addUser(response.data));
    } catch (error) {
      throw Error("Error al registrar el usuario", error);
    };
  };
};

export const registerAdmin = (postAdmin) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("https://bfs-pfhenry-production.up.railway.app/admin/", postAdmin);
<<<<<<< HEAD
      console.log(response.data)
=======
>>>>>>> 206c4c62df6ba7531bb802f80ab9eeb92d0a8f1e
      dispatch(addAdmin(response.data));
    } catch (error) {
      throw Error(error.message);
    };
  };
};

export const userProfile = (input) => {
  return async (dispatch) => {
    try {
      const response = await axios.put("https://bfs-pfhenry-production.up.railway.app/user/profile", input);
      console.log(response.data)
      dispatch(updateUser(response.data));
    } catch (error) {
      throw Error(error.message);
    };
  };
};
