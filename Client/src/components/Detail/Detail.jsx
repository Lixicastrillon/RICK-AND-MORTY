import {useParams} from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

const Detail = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState([])
    useEffect( () => {
         axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacter(data);
            } else {
               alert('No hay personajes con ese ID');
            }
         }).catch((error)=>console.log(error.message));
         return setCharacter({});
     }, []);
    return (
    <div>
    <img src={character.image && character.image} alt="" />
    <h1>Name:"{character.name && character.name}"</h1>
    <h1>Status:"{character.status && character.status}"</h1>
    <h1>Species:"{character.species && character.species}"</h1>
    <h1>Gender: "{character.gender && character.gender}"</h1>
    <h1>Origin:"{character.origin?.name && character.origin?.name}"</h1>
    </div>
    )
    }


export default Detail;