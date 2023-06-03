const {Favorite} = require ("../DB_connection.js")

const postFav = async (req, res) => {

    try {
       let  {id, name, origin, status, image, species, gender} = req.body
       console.log(req.body)
        if(!id || !name || !origin || !status || !image || !species || !gender){
            return res.status(401).send("Faltan datos")
        }
        origin = origin.name
        await Favorite.findOrCreate({where:{id, name, origin, status, image, species, gender}})
        const allFavorite = await Favorite.findAll();
        return res.json(allFavorite)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports= postFav;
