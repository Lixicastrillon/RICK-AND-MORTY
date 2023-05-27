const users = require ("../utils/users")


const login = (req , res)=> {

    const {email,password} = req.query
     
    const usersFind = users.find((user)=> 
        user.email === email && user.password === password)
        
         if(usersFind){                        //// se debe hacer return ??
            res.estatus(200).json({acess:true})
        }
        else {
            res.status(404).json({acess:false})
        }
    }




module.exports={login}