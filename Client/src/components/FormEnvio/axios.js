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
      return responseData.link; 
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


