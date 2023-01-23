import Card from '../Card/Card';
import styles from './Cards.module.css'
export default function Cards(props) {
   // const { characters } = props;
   return (
      <div className={styles.cards}>
         {
            props.characters.map((char,index)=>{
            return <Card 
            key={index}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
            detailId={char.id}
            onClose={props.onClose}
            />})
         }
      </div>
   )
}
