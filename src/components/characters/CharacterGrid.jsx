import CharacterItem from "./CharacterItem"
import Spinner from "../ui/Spinner"

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