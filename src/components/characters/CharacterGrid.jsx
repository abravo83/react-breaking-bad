const CharacterGrid = ({isLoading, characters}) => {

    return (
        isLoading ? (<h1>Loading...</h1>) : (<section className="cards">
            {characters.map((item) => (<h1 key={item.char_id}>{item.name}</h1>))}
        </section>)
    )
}

export default CharacterGrid