/* eslint-disable no-unused-vars */
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
    }
  }
}

export const registerAdmin = (postAdmin) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("https://bfs-pfhenry-production.up.railway.app/admin/", postAdmin);
      console.log(response.data)
      dispatch(addAdmin(response.data));
    } catch (error) {
      throw Error(error.message);
    }
  };
};
