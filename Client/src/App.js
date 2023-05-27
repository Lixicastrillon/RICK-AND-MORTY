import "./App.css";
import Cards from "./components/cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState,useEffect } from "react";
import axios from "axios";
import { Routes , Route,useLocation,useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form"
import Favorites from "./components/Favorites/Favorites"



function App() {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation()

  const navigate =  useNavigate()
  const [access, setAccess] = useState(true )
  
  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(access);
       access && navigate('/home');
    });
 }

  function onSearch(id) {
    if(characters.find((cha)=> cha.id.toString()===id)){
      window.alert("El personaje ya existe")
    }else {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            
            setCharacters([...characters, data])
      
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
    }

  }

  function onClose(id) {
    setCharacters(
      characters.filter((arg) => {
        return arg.id !== Number(id);
      })
    );
  }
  

    useEffect(() => {
      !access && navigate('/');
   }, [access]);


  return (
    <div className="App">
      <div className="background"> 
     
       {pathname !== "/" && <Nav onSearch={onSearch} /> }
    <Routes>
      <Route path="/" element={<Form login={login}/>}/>
      <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/favorites" element={<Favorites onClose={onClose}/>} />
    </Routes>
      </div>
    </div>
  );
}


export default App;
