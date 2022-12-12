import Card from './Card';
import styles from './Cards.module.css'
export default function Cards(props) {
   // const { characters } = props;
   return (
      <div className={styles.contenedor}>
         {
            props.characters.map((e,index)=>{
            return <Card 
            key={index}
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
            />})
         }
      </div>
   )
}
