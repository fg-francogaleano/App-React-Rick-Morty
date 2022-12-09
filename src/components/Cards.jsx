import Card from './Card';

export default function Cards(props) {
   // const { characters } = props;
   return (
      <div>
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
