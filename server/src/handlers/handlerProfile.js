
const handlerGetProfile = async (req, res) => {

    const { name } = req.query;
    try {
        const response = await getProfileUser(name);
        !response ? res.status(400).json({ error:`No se encontró el usuario ${name}` })
            : res.status(200).json(response)
    } catch (error) {
res.status(500).json({error:error.message});
    }
};

const handlerPutProfile = async(req,res)=>{
    const { name } = req.query;
    try {
        const response = await putProfile(name);
        !response ? res.status(400).json({ error:`No se encontró el usuario ${name}` })
            : res.status(200).json(response)
    } catch (error) {
res.status(500).json({error:error.message});
    }

};

//      ESTE HANDLER LO COMENTE YA QUE CRISTIAN NOS HABLO SOBRE EL BORREDO LOGICO

// const handlerDelProfile = async(req,res)=>{
//     const { name } = req.query;
//     try {
//         const response = await deleteProfile(name);
//         !response ? res.status(400).json({ error:`No se encontró el usuario ${name}` })
//             : res.status(200).json(response)
//     } catch (error) {
// res.status(500).json({error:error.message});
//     }
// };

module.exports = {
  //  handlerDelProfile,
    handlerGetProfile,
    handlerPutProfile
};