import CharacterItem from "./CharacterItem"

const CharacterGrid = ({isLoading, characters}) => {

  return (
    isLoading ? (
      <h1>Loading...</h1>
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