 const axios = require ("axios")

 
 const getCharById = (res , id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((result) =>  result.data)
        .then(({name,gender,species,origin,image,status})=> {
            let character= {
                id,
                name,
                gender,
                species,
                origin,
                image,
                status
            }
            res.writeHead(200,{"content-type": "application/json"}).end(JSON.stringify(character))
        })
        .catch((error)=> res.writeHead(500,{"content-type":"text/plain"}).end(error.message))  
 }

module.exports = {
    getCharById
}