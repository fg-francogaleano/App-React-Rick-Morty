import {useEffect, useState} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import styles from "./App.css";
import Nav from "./components/Nav/Nav"
import SearchBar from "./components/SearchBar/SearchBar";
import Cards from "./components/Cards/Cards"
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import Form from "./components/Form/Form";

export default function App () {
  
  const [characters, setCharacters] = useState([]) 
  const onSearch = (Id)=>{
    fetch(`https://rickandmortyapi.com/api/character/${Id}`)
    .then((response) => response.json())
    .then((data) => {//data: personaje nuevo
      if (data.name) {
        let exist = characters.find((e)=>e.id===data.id)
        if(exist){
          alert('Ese personaje ya existe')
        }else{
          setCharacters((oldChars) => [...oldChars, data]);
        } 

      } else {
          window.alert('No hay personajes con ese ID');
       }
    });
  }

  const onClose = (id)=>{
    console.log(id)
    setCharacters((character)=>{
      return character.filter((e) => e.id !== id)
    })
  }

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'fg.francogaleano@gmail.com';
  const password = 'Candela2009';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/home');
    }
  }

  const location = useLocation();

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  return (
    <div className='App' style={{ padding: '0px' }}>
      {location.pathname !== "/" && 
      <Nav onSearch={onSearch} element={<SearchBar/>}/>}
      <Routes>
        <Route exact path={"/home"} element={<Cards characters={characters} onClose={onClose} />}/>
        <Route exact path={"/about"} element={<About />}/>
        <Route exact path={"/detail/:detailId"} element={<Detail />}/>
        <Route exact path={"/"} element={<Form login={login}/>}/>
      </Routes>
    </div>
  )
};


