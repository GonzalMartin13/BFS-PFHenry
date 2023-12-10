/* eslint-disable no-unused-vars */
// // userActions.js
import axios from "axios";
import { addUser, addAdmin, updateUser } from "../Slices/userSlice"; // Asegúrate de importar addUser desde el archivo correcto

export function registerUser(postUser) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/user/register",
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
      const response = await axios.post(
        "http://localhost:3001/admin/",
        postAdmin
      );
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
      const response = await axios.put(
        "http://localhost:3001/user/profile",
        input
      );
      console.log(response.data);
      dispatch(updateUser(response.data));
    } catch (error) {
      throw Error(error.message);
    }
  };
};
