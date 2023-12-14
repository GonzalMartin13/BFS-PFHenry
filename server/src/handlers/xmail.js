const {User} = require("../db")

const usuarioXmail = async(req, res) =>{
    const {email} = req.params
    try {
        const user = await User.findByPk(email)
        res.status(200).json(user.isBanned)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = {usuarioXmail}