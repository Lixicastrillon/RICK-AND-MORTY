import style from "./card.module.css"
import {Link} from "react-router-dom"
import { addFav,removeFav} from "../../Redux/actions"
import { useDispatch, useSelector} from "react-redux"
import { useState, useEffect } from "react"




function Card(props) {
   const dispatch = useDispatch()


  const myFavorites = useSelector((state) => state.myFavorites)

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav){
      setIsFav(false) 
      dispatch(removeFav(props.id))
      } else {
      setIsFav(true)
      dispatch(addFav(props))
      }
   }
       
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
const handleOnClose = () => {
   dispatch(removeFav(props.id))
   props.onClose(props.id)
}
   return (
   
      <div className={style.container}>
         {
  
      <button onClick={handleFavorite}>{ isFav ? "❤️" :"🤍"}</button> 
}
         <button className={style.boton} onClick={()=>handleOnClose()}>X</button>
         <div className={style.nameCharacter}>
          <Link to={`/detail/${props.id}`}>
          <h2>{props.name}</h2>
          </Link>  
         </div>
            <h2 className={style.origin}> {props.origin.name}</h2>
         <div>
            <img className={style.imagen} src={props.image} alt='' /> 
         </div>
         <div className={style.footer}>
            <h2 className={style.h2Footer}>[ {props.species} ]</h2>
            <h2 className={style.h2Footer}>{props.status}</h2>
            <h2 className={style.gender}>{props.gender}</h2>
         </div>
      </div>
   );
}


export default Card;

    
   