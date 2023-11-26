// // userActions.js
import axios from "axios";
import {  addUser,logUser } from "../Slices/userSlice"; // Asegúrate de importar addUser desde el archivo correcto

export function registerUser(input) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/user/register",
        input
      );

      dispatch(addUser(response.data));
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
  };
}

export function loginUser(input) {
  return async function (dispatch) {
    try {
      const response = await axios.put("http://localhost:3001/user/log", input);

      dispatch(logUser(response.data));
    } catch (error) {
      console.error("Error al inciar sesion:", error);
    }
  };
}
