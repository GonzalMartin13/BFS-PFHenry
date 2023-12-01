require("dotenv").config();
const {KEY_MP_TEST, KEY_MP_REAL} = process.env
const {MercadoPagoConfig, Preference} = require("mercadopago")


const pagosControler = async (servicios, total) => {
    const client = new MercadoPagoConfig({accessToken:KEY_MP_TEST})
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
        back_urls:{
            success:"http://localhost:3001/pagos/exitosa" ,
            pending:"http://localhost:3001/pagos/pendiente",
            failure:"http://localhost:3001/pagos/fallida"
        },
        auto_return: "approved",
        
    } }).then(console.log("then")).catch(console.log("catch"));
    return orden
}

const succesControler = async (query) => {
    
    return await query.status
}

const pendienteControler = async () => {
    return 3
}

const fallidaControler = async( query ) => {
    if (query.status === "null"){    
        return await "desaproved"
    }
    
}

const webHookControler = async() => {
    return 5
}




module.exports = {
    pagosControler,
    succesControler,
    pendienteControler,
    webHookControler,
    fallidaControler
}