import {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';

const App = () => {

  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState (true)

  useEffect(
    () => {
      const fetchItems = async () => {
        const result = await axios(
          `https://www.breakingbadapi.com/api/characters`
        )

        
        console.log(result.data)
        setCharacters(result.data)
        setIsLoading(false)
      }
      
      fetchItems()
    }, []
  )

  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
