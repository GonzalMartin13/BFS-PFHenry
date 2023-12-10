/* eslint-disable no-unused-vars */
// // userActions.js
import axios from "axios";
import { addUser, addAdmin, updateUser } from "../Slices/userSlice"; // Asegúrate de importar addUser desde el archivo correcto

export function registerUser(postUser) {
  return async function (dispatch) {
    try {
<<<<<<< HEAD
      const response = await axios.post( 
        "https://bfs-pfhenry-production.up.railway.app/user/register", 
=======
      const response = await axios.post(
        "http://localhost:3001/user/register",
>>>>>>> ae82b79d50c3b3e22ae5f929951fe8d69ac60d14
        postUser
      );
      dispatch(addUser(response.data));
    } catch (error) {
      throw Error("Error al registrar el usuario", error);
    }
  };
}

export const registerAdmin = (postAdmin) => {
  return async (dispatch) => {
    try {
<<<<<<< HEAD
      const response = await axios.post("https://bfs-pfhenry-production.up.railway.app/admin/", postAdmin);
=======
      const response = await axios.post(
        "http://localhost:3001/admin/",
        postAdmin
      );
>>>>>>> ae82b79d50c3b3e22ae5f929951fe8d69ac60d14
      dispatch(addAdmin(response.data));
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const userProfile = (input) => {
  return async (dispatch) => {
    console.log(input);
    try {
<<<<<<< HEAD
      const response = await axios.put("https://bfs-pfhenry-production.up.railway.app/user/profile", input);
      console.log(response.data)
=======
      const response = await axios.put(
        "http://localhost:3001/user/profile",
        input
      );
      console.log(response.data);
>>>>>>> ae82b79d50c3b3e22ae5f929951fe8d69ac60d14
      dispatch(updateUser(response.data));
    } catch (error) {
      throw Error(error.message);
    }
  };
};
