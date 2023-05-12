import style from "./card.module.css"
import {Link} from "react-router-dom"

function Card(props) {
   return (
   
      <div className={style.container}>
         <button className={style.boton} onClick={()=>props.onClose(props.id)}>X</button>
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