const {Shipment, Receive, Package} = require ('../db');

const postEnvio = async (
        weight,                 // package
        dimensions,             //package
        service,                //package
        deliveryInstructions,   //package
        photoUrl,               //package
        name,                       //chipment
        email,                      //chipment
        phone,                      //chipment
        province,                   //chipment
        city,                       //chipment
        status,                  //chipment
        estimatedDeliveryDate,    //chipment
        nameReceive,            // receive
        povinceReceive,         // receive
        cityReceive,            // receive
        phoneReceive,           // receive
        emailReceive           // receive

)=>{
const newEnvio = await Package.create({
    weight,                 
    dimensions,             
    service,                
    deliveryInstructions,   
    photoUrl  
})
return newEnvio;
};



module.exports = {postEnvio};