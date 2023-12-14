const {baneado} = require("../controllers/bancontroller")

const handlerBan = async (req,res) => {
    const {userMail} = req.params
    console.log(userMail)
    try {
        const response = await baneado(userMail)
        res.status(200).json(response)
    } catch (error) {
        res.status(405).json(error.message)
    }
}

module.exports = { handlerBan }