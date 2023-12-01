export const enviarEnvio = async (envioData) => {
    try {
        console.log("Datos enviados:", envioData);
      const response = await fetch("http://localhost:3001/envios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(envioData),
      });
  
      if (response.ok) {
        return { success: true };
      } else {
        console.error("Error");
        return { success: false, error: "Hubo un error" };
      }
    } catch (error) {
      console.error("Error al enviar", error);
      return { success: false, error: "Hubo un error al enviar" };
    }
  };