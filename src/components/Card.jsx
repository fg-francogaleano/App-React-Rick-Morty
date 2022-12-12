// import {rick} se podria import directament desde aca, pero el comp no seria reutilizable, 
// en ese caso solo se podria usar con rick
import styles from "./Card.module.css"
export default function Card(props) {
   return (
      <div className={styles.contenedor}>
         <button className={styles.boton} onClick={props.onClose}>X</button>
         <h2 className={styles.h2Name}>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img className={styles.imagen}  src={props.image} alt="" />
      </div>
   );
}
