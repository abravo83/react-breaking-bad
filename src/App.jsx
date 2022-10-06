//Import hooks
import {useState, useEffect} from 'react'
//Import axios module for calling the API
import axios from 'axios';
//Import stylesheet for the app
import './App.css';
//Import Header component
import Header from './components/ui/Header';
//Import Character component
import CharacterGrid from './components/characters/CharacterGrid';
//Import Search component
import Search from './components/ui/Search';


//Our main App. The entry point for the App.
const App = () => {

  //Hook to keep the characters array as app State
  const [characters, setCharacters] = useState([])
  //Hook to keep a State called isLoading to show a Spinner while the API answers
  //Default is to true: By default shows a loading spinner
  const [isLoading, setIsLoading] = useState (true)
  //Hook to keep state of the query sent by the Search component
  const [query, setQuery] = useState('')

  //Hook to execute requests and keep the APIs answers  
  useEffect(
    () => {
      //Define the async function that queries the API
      const fetchItems = async () => {
        const result = await axios(
          `https://www.breakingbadapi.com/api/characters?name=${query}`
        )
        
        //Uses answer to update characters's state
        setCharacters(result.data)
        //Once api has answered changes isLoading state to render results
        setIsLoading(false)
      }
      
      //Execute the function that queries the API
      fetchItems()
    }, [query]
  )

  //The return to render (Contains the 1st level components)
  return (
    <div className="container">
      <Header />
      {/* Search gets the 'q' query from within Search prop and sets in the query state */}
      <Search getQuery={(q)=>setQuery(q)} />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
