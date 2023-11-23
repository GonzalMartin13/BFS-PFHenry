// userActions.js
import axios from "axios";
import { addUser } from "../Slices/userSlice"; // Asegúrate de importar addUser desde el archivo correcto

export function registerUser(input) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/user/register",
        input
      );
      console.log("Respuesta del servidor:", response.data);
      dispatch(addUser(response.data)); // Asume que el servidor devuelve un objeto con un campo 'id'
      // Puedes dispatch otras acciones si es necesario
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
  };
}
