// import {rick} se podria import directament desde aca, pero el comp no seria reutilizable, 
// en ese caso solo se podria usar con rick
import styles from "../Card/Card.module.css"
import { Link } from "react-router-dom";
export default function Card(props) {
   return (
      <div className={styles.contenedor}>
         
         <div className={styles.buttonContenedor}>
            <button onClick={()=>props.onClose(props.detailId)}>X</button>
         </div>
        
         <Link to={`/detail/${props.detailId}`}> 
            <div className={styles.h2Contenedor}>
               <h2>{props.name}</h2> 
            </div>
         </Link>
        
         <div className={styles.imgContenedor}>
            <img  src={props.image} alt={props.name}/>
         </div>
        
      </div>
   );
}
