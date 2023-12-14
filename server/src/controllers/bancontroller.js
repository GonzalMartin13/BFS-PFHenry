const {User} = require("../db")


const baneado = async (userMail) => {
    try {
        console.log(userMail)
        const usuarioABanear = await User.findByPk(userMail)
        console.log(usuarioABanear)
        const isBan = usuarioABanear.isBanned
        if (!isBan){
            await User.update({isBanned: true},{where:{email: userMail}})
            console.log(User)
            return "Usuario Baneado"
            }else{
            await User.update({isBanned: false},{where:{email: userMail}})
            console.log(User)
            return "Usuario Desbaneado"
            }
    } catch (error) {
        throw new Error("No se baño, sigue sucio")
    }
}

module.exports = {baneado}