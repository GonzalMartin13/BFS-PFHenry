const {MercadoPagoConfig, Preference} = require("mercadopago")


const pagosControler = async (servicios, total) => {
    const client = new MercadoPagoConfig({accessToken:"TEST-1057688479891287-112823-61c0a8cfc464708fa63f6e86454a4a72-1569211085"})
    const preference = new Preference(client)
    console.log(client, preference, typeof(total), total)
    const orden = await preference.create({ body: {
        items: [
            {
                title: ("Envio " + servicios),
                unit_price: total,
                currency_id: "ARS",
                quantity: 1,
            }
        ],
    } }).then(console.log("then")).catch(console.log("catch"));
    return orden
}
const succesControler = async (req, res) => {
    return 2
}
const pendienteControler = async (req, res) => {
    return 3
}

module.exports = {
    pagosControler,
    succesControler,
    pendienteControler
}