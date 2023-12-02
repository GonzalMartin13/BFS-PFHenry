import axios from "axios";

const enviarBD = async (valores) => {
  const {
    origen,
    destino,
    largo,
    ancho,
    alto,
    peso,
    servicios,
    total,
    imagen,
    dniRemitente,
    userID,
  } = valores;


  const datosEnvio = {
    origen,
    destino,
    largo,
    ancho,
    alto,
    peso,
    servicios,
    total,
    imagen,
    dni: dniRemitente,
    userEmail:userID,
  };
  console.log("Datos ", datosEnvio)

  try {
    const response = await fetch("http://localhost:3001/envios/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        origen,
        destino,
        largo,
        ancho,
        alto,
        peso,
        servicios,
        total,
        imagen,
        dniRemitente,
        userEmail: userID,
      }),
    });

    if (response.ok) {
      console.log("Envío a BD exitoso");
     
    } else {
      console.error("Error al enviar");
      throw new Error("Error al enviar throw");
    }
  } catch (error) {
    console.error("Error en la solicitud", error);
    throw new Error("Error en la solicitud throw");
  }
};

export { enviarBD };