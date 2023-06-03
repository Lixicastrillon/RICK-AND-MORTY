const {User} = require ("../DB_connection.js")

const login = async (req, res) => {
    try {
        const {email,password} = req.query
        if(!email || !password) return res.status(400).send("faltan datos")

        const user = await User.findOne({where :{email}}) 

        if(!user) return res.status(404).send("usuario no encontrado")

        return user.password === password 
        ? res.json({access : true}) 
        : res.status(403).send(error.message)
    } catch (error) {
        return res.status(500).send(error.message)
    }
 
    
}

module.exports= login;