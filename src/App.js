import "./App.css";
import Cards from "./components/cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import axios from "axios";
import { Routes , Route,useLocation } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form"

function App() {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation()

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    setCharacters(
      characters.filter((arg) => {
        return arg.id !== Number(id);
      })
    );
  }
  return (
    <div className="App">
      <div className="background"> 
     
       {pathname !== "/" && <Nav onSearch={onSearch} /> }
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
    </Routes>
      </div>
    </div>
  );
}


export default App;
