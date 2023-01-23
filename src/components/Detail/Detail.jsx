import React from "react";
import { useState } from "react";   
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import  styles  from "./Detail.module.css"

export default function (){
    
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
      console.log(character)
    return(
        <div className={styles.contenedor}>
            
            <div className={styles.dataContenedor}>
              <h1>Name: {character.name}</h1>
              <h2>Status: {character.status}</h2>
              <h2>Species: {character.species}</h2>
              <h2 >Gender: {character.name}</h2>
              <h2 >Origin: {character.origin?.name}</h2>
            </div>

            <div>
              <img src={character.image} alt={character.name} className={styles.imgContenedor}/>
            </div>
        </div>
    )   
}