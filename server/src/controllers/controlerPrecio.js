const axios = require("axios");

const contolerPrecio = async (origen, destino, volumen, peso, servicios) => {
  try {
    const { data } = await axios(
      `https://provincias.onrender.com/provincias/${origen}`
    );
    const provinciaEncontrada = data.distanciaEntreProvincias.find(
      (provincia) => provincia.provincia.toLowerCase() === destino.toLowerCase()
    );

    if (!provinciaEncontrada) {
      return "No se pudo calcular la distancia entre destinos";
    }

    let precioFinal = Math.floor(
      provinciaEncontrada.distancia * 1.1 + volumen * 1.1 + peso * 1.1
    );

    precioFinal = servicios.reduce((acumulador, servicio) => {
      switch (servicio.toLowerCase()) {
        case "discreto":
          return acumulador * 1.2;
        case "express":
          return acumulador * 1.3;
        case "fragil":
          return acumulador * 1.1;
        default:
          return acumulador;
      }
    }, precioFinal);

    return precioFinal;
  } catch (error) {
    console.error("Error al calcular el precio:", error.message);
    return "Hubo un error al calcular el precio";
  }
};

module.exports = contolerPrecio;
