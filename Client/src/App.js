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
  
  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      console.log(data)
      setAccess(data.access);
      console.log(access)
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  }

 async function onSearch(id) {
  try {
    const { data } = await axios(
      `http://localhost:3001/rickandmorty/character/${id}`
    );

    if (data.name) {
      setCharacters((oldChars) => [...oldChars, data]);
    } else {
      alert("¡No hay personajes con este ID!");
    }
  } catch (error) {
    console.log(error);
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
