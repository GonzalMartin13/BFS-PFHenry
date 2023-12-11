const provincias = require("../../provincias/indexProvincias");
const contolerPrecio = async (origen, destino, volumen, peso, servicios) => {
  try {
    const data = provincias[origen];
    const provinciaEncontrada = data.distanciaEntreProvincias.find(
      (provincia) => provincia.provincia.toLowerCase() === destino.toLowerCase()
    );
    //
    let precioFinal = 0;
    //
    //en caso que sea la misma provincia de origen y destino

    const precioBase = !servicios.includes("carteria") ? 1900 : 1500;

    if (origen === destino) {
      precioFinal += precioBase;
    }
    //si destino y origen son provincias distintas
    if (destino !== origen) {
      //
      //precio x km para distancias menores a 500km
      let precioXKilometro = servicios.includes("carteria") ? 6.8 : 8;
      //
      //distancias mayores a 500
      if (
        provinciaEncontrada.distancia > 500 &&
        provinciaEncontrada.distancia < 1000
      ) {
        precioXKilometro = servicios.includes("carteria") ? 5 : 6.5;
      }
      //distancias mayores a 1000km
      if (
        provinciaEncontrada.distancia > 1000 &&
        provinciaEncontrada.distancia < 2000
      ) {
        precioXKilometro = servicios.includes("carteria") ? 3.5 : 5.5;
      }
      //distancias mayores a 2000km
      if (
        provinciaEncontrada.distancia > 2000 &&
        provinciaEncontrada.distancia < 3000
      ) {
        precioXKilometro = servicios.includes("carteria") ? 2.5 : 4;
      }

      //distancias mayores a 3000km
      if (provinciaEncontrada.distancia > 3000) {
        precioXKilometro = servicios.includes("carteria") ? 1.8 : 2.5;
      }
      precioFinal += provinciaEncontrada.distancia * precioXKilometro;
    }
    //sumo % de servicio segun corresponda
    let precioASumar = precioFinal;
    //express +40%
    if (servicios.includes("express")) {
      precioFinal = precioFinal + precioASumar * 0.4;
    }
    //fragilBox +40%
    if (servicios.includes("fragilBox")) {
      precioFinal = precioFinal + precioASumar * 0.4;
    }
    //certificada +40%
    if (servicios.includes("certificada")) {
      precioFinal = precioFinal + precioASumar * 0.4;
    }
    //descuento si incluye express, certificada y fragil
    // let desc = 0;
    // if (
    //   servicios.includes("express") &&
    //   servicios.includes("certificada") &&
    //   servicios.includes("fragilBox")
    // ) {
    //   precioFinal = precioFinal - precioFinal * 0.1;
    // }
    //sumo % por peso segun corresponda
    precioFinal = precioFinal + precioFinal * (peso / 70);
    //sumo % de dimensiones

    let dimensiones = volumen / 2000;
    console.log(precioASumar * 0.4);
    let descuentoServicio = precioASumar * 0.4;
    if (precioFinal < precioBase) precioFinal = precioBase;
    if (volumen) precioFinal = precioFinal + precioFinal * dimensiones;
    // return {precioFinal:Math.floor(precioFinal),precioASumar};
    // desc = precioFinal * 0.1;
    return {
      precioFinal: Number(precioFinal).toFixed(2),
      precioASumar,
      descuentoServicio,
      //desc,
    };
  } catch (error) {
    console.error("Error al calcular el precio:", error.message);
    return "Hubo un error al calcular el precio";
  }
};

module.exports = contolerPrecio;
