// import styles from './SearchBar.madule.css'
import { useState } from 'react';


export default function SearchBar(props) {
   const [Id, setId] = useState("")//se iniciaiza con string vacio es lo que se escribe en el input...ej:30
   const handleInput =(event)=>{
      const value = event.target.value//30
      setId(value)
   }
   return (
      <div>
         <input //30
         type="text" 
         name="search" 
         placeholder="type ID" 
         onChange={(e)=>handleInput(e)} 
         value={Id}/>
         <button onClick={()=>props.onSearch(Id)}>Agregar</button>
      </div>
      //onclick llama a la onSearch por lo que se va a repetir cada vez que 
      //toque el boton
   );
}
