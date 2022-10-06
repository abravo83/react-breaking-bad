//Two subcomponents to import
import CharacterItem from "./CharacterItem"
import Spinner from "../ui/Spinner"

//This is the container component for all the characters cards.
//It first checks whether the isLoading state has changed (if the API has answered)
//if not displays a spinner gif, else maps the APIs characters array sent as prop to new CharacterItem components
const CharacterGrid = ({isLoading, characters}) => {

  return (
    isLoading ? (
      <Spinner />
    ) : (
    <section className="cards">
      {characters.map((item) => (
          <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
    )
  )
}

export default CharacterGrid