import axios from "axios";
import {addPackage,addUserPackage,addUserPackageById} from "../Slices/packageSlice";

export function getPackages() {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        "http://localhost:3001/envios"
      );
      dispatch(addPackage(response.data));
    } catch (error) {
      throw Error("Error al registrar el usuario", error);
    };
  };
};

export function getUserPackages(UserEmail) {
  return async function (dispatch) {
    try {

      const response = await axios.get(`http://localhost:3001/envios/user/${UserEmail}`);
  
      dispatch(addUserPackage(response.data));
    } catch (error) {
      console.error("Error al obtener envíos del usuario", error);
    }
  };
}
  

  export function getUserPackagesById(id) {
    return async function (dispatch) {
      try {
        const response = await axios.get(
          `http://localhost:3001/envios/${id}`
        );
        dispatch(addUserPackageById(response.data));
      } catch (error) {
        throw Error("Error al registrar el usuario", error);
      };
    };
  };

  export function cleanDetail(){
    return async function (dispatch){
    dispatch(cleanDetail())
    }
  }

  
  
