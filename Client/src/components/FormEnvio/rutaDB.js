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
    imagen: imagenLocal,
    dniRemitente,
    userID,
    nombreDestinatario,
  } = valores;

  const numeroLargo = parseInt(largo, 10);
  const numeroAncho = parseInt(ancho, 10);
  const numeroAlto = parseInt(alto, 10);

  const datosEnvio = {
    origen,
    destino,
    largo: numeroLargo,
    ancho: numeroAncho,
    alto: numeroAlto,
    peso,
    servicios: servicios.join(", "),
    total,
    imagen: imagenLocal,
    dni: dniRemitente,
    UserEmail: userID,
    destinatario: nombreDestinatario,
  };
  console.log("Datos ", datosEnvio);

  try {
    const response = await axios.post(
      // "https://bfs-pfhenry-production.up.railway.app/envios/",
      "http://localhost:3001/envios",
      datosEnvio
    );

    if (response.status === 201) {
      console.log("exito ", datosEnvio);
      console.log("Envío a BD exitoso");
      console.log("la respuesta", response.data);
      return response.data;
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
