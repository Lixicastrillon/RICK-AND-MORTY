import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";
import { useState } from "react";
import { filterCards , orderCards } from "../../Redux/actions";


const Favorites = ({ onClose }) => {

    const[aux, setAux] = useState(false)

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux)
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const myFavorites = useSelector((state) => state.myFavorites);

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>

      {myFavorites.length &&
        myFavorites.map((arg) => (
          <Card
            key={arg.id}
            id={arg.id}
            name={arg.name}
            status={arg.status}
            species={arg.species}
            gender={arg.gender}
            origin={arg.origin}
            image={arg.image}
            onClose={onClose}
          />
        ))}
    </div>
  );
};

export default Favorites;
