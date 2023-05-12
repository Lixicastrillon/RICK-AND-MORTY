
import Card from "../card/Card";
import styl from "./cards.module.css"

function Cards({ characters, onClose}) {
  return (
    <div className={styl.container}>
      {characters.map((arg) => (
          <Card
            key ={arg.id}
            id={arg.id}
            name={arg.name}
            status={arg.status}
            species={arg.species}
            gender={arg.gender}
            origin={arg.origin}
            image={arg.image}
            onClose={onClose}     
          />
        )
      )}
    </div>
  );
}
export default Cards;