
import axios from 'axios';
import { setAdminList } from './adminSlice';

// Función para activar/desactivar un administrador
const toggleAdminActivationAsync = (adminId) => async (dispatch, getState) => {
  try {
    // Realizar la llamada a la API para cambiar el estado del administrador
    await axios.put(
       `https://bfs-pfhenry-production.up.railway.app/admin/${adminId}/toggle-activation` 
      /*` http://localhost:3001/admin/${adminId}/toggle-activation` */
    );

    // Actualizar el estado en el frontend utilizando las acciones de Redux
    const adminList = getState().admin;
    const updatedAdminList = adminList.map(admin =>
      admin.id === adminId ? { ...admin, isActive: !admin.isActive } : admin
    );

    dispatch(setAdminList(updatedAdminList));
  } catch (error) {
    console.error('Error al activar/desactivar administrador:', error);
    // Puedes manejar errores según tus necesidades, como mostrar un mensaje al usuario.
  }
};

export { toggleAdminActivationAsync };


  
