require("dotenv").config();
const { KEY_MP_TEST, KEY_MP_REAL } = process.env;
const { MercadoPagoConfig, Preference } = require("mercadopago");

const pagosControler = async (servicios, total) => {
  const client = new MercadoPagoConfig({ accessToken: KEY_MP_TEST });
  const preference = new Preference(client);
  try {
    const orden = await preference.create({
      body: {
        items: [
          {
            title: "Envio " + servicios,
            unit_price: total,
            currency_id: "ARS",
            quantity: 1,
          },
        ],

/*         back_urls: {
          success: "http://localhost:5173/factura",
          pending: "http://localhost:3001/pendiente",
          failure: "http://localhost:5173/error",
        }, */
                 back_urls:{ 
            success:"https://bfsonline.vercel.app/factura",
            pending:"https://bfsonline.vercel.app/pend",
            failure:"https://bfsonline.vercel.app/error"
        }, 
        

        auto_return: "all",
        payment_methods: {
          installments: null,
        },
        statement_descriptor: "BFS by SoyHenry",
      },
    });
    return orden;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

const succesControler = async (query) => {
  return await query;
};

const pendienteControler = async () => {
  return 3;
};

const fallidaControler = async (query) => {
  if (query.status === "null") {
    return await "desaproved";
  }
};

const webHookControler = async () => {
  return 5;
};

module.exports = {
  pagosControler,
  succesControler,
  pendienteControler,
  webHookControler,
  fallidaControler,
};
