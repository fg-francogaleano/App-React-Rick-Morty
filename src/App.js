import {useState} from "react";
import styles from "./App.css";
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'


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

  return (
    <div className='App' style={{ padding: '25px' }}>
      
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <hr />
      
      <div>
        <Cards characters={characters} onClose={onClose}/>
      </div>
    
    </div>
  )
}


