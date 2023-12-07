const controlerContacto = require("../controllers/postClienteControler")
const formContacto = async(req, res) =>{
    const {name, phone, mail, message} = req.body
    try{
        const respuesta = await controlerContacto(name, phone, mail, message)
        res.status(200).json(respuesta)
    } catch (error){
        console.log('Error en el envio del correo: ', error);
        res.status(500).json(error)
    }
}
/*  endpoint: http://https://bfs-pfhenry-production.up.railway.app/clientes/
 tipo: post
 devuelve: encapsula los datos de formulario en un objeto
*/


module.exports = formContacto