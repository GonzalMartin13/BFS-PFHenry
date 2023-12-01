/* eslint-disable no-unused-vars */
import axios from "axios";


const enviarAPago = async (total, servicios) => {
  try {
    const response = await fetch("http://localhost:3001/pagos/crear", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ total, servicios }),
    });

    if (response.ok) {
      const responseData = await response.json();
      return responseData.link; // Asegúrate de ajustar esto según la estructura real de la respuesta
    } else {
      console.error("Error al crear el pago");
      throw new Error("Error al crear el pago");
    }
  } catch (error) {
    console.error("Error en la solicitud", error);
    throw new Error("Error en la solicitud");
  }
};
export { enviarAPago };



// export const enviarAPago = async (total, servicios) => {
//   try {
//     const response = await fetch("http://localhost:3001/pagos/crear", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ total, servicios }),
//     });

//     if (response.ok) {
//       const data = await response.json();

//       return data.link;
//     } else {
//       console.error("Error al crear el pago");

//       throw new Error("Error al crear el pago");
//     }
//   } catch (error) {
//     console.error("Error en la solicitud", error);

//     throw new Error("Error en la solicitud");
//   }
// };



  //   try {
  //       console.log("Datos enviados:", envioData);
  //     const response = await fetch("http://localhost:3001/envios", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(envioData),
  //     });
  
  //     if (response.ok) {
  //       return { success: true };
  //     } else {
  //       console.error("Error");
  //       return { success: false, error: "Hubo un error" };
  //     }
  //   } catch (error) {
  //     console.error("Error al enviar", error);
  //     return { success: false, error: "Hubo un error al enviar" };
  //   }
  // };

