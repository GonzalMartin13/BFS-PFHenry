const contolerPrecio = require("../controllers/controlerPrecio");

const cotizarHandler = async (req, res) => {
  const { origen, destino, largo, ancho, alto, peso, status, servicios } = req.body;
  const volumen = Number(ancho) + Number(largo) + Number(alto);
  console.log(typeof(servicios), servicios)
  try {
    if (largo > 190 || ancho > 190 || alto > 190) {
      return res
        .status(200)
        .json(
          "Por cuestiones operativas no podemos realizar envios de mas de 190 cms. de alto, ancho o largo."
        );
    }
    if (peso > 100) {
      return res
        .status(200)
        .json(
          "Por cuestiones operativas no podemos realizar envios de mas 100 kgs. de peso."
        );
    }
    const data = await contolerPrecio(
      origen,
      destino,
      volumen,
      peso,
      servicios
    );
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(404).send(error.message);
  }
};

module.exports = cotizarHandler;

/*  endpoint: https://bfs-pfhenry-production.up.railway.app/envios/price
 tipo: post
 devuelve: devuelve el precio del envio
 */
