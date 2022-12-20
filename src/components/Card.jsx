// import {rick} se podria import directament desde aca, pero el comp no seria reutilizable, 
// en ese caso solo se podria usar con rick
import styles from "./Card.module.css"
export default function Card(props) {
   return (
      <div className={styles.card}>
         <button className={styles.boton} onClick={()=>props.onClose(props.id)}>X</button>
         <h2 className={styles.h2}>{props.name}</h2>
         <div className={styles.p}>
         <p>Specie: {props.species}</p>
         <p>Gender: {props.gender}</p>
         </div>
         <img className={styles.img} src={props.image} alt="" />
      </div>
   );
}
