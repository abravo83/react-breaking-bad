import {useState} from 'react'

//The Search component looks for any change on its text input
//When there is a change it sets the new value as the text state
//Then sends the text as (q) query executing App.js's getQuery(q) function
//THere getQuery will execture directly in the prop setQuery(q) that will then
//set a new value for the 'query' state. This query state is passed as part of the
//API call, when is empty returns every character, but when has values returns the
//characters whose names start with those values.
//See App.js line 32
const Search = ({getQuery}) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }


  return (
    <section className='search'>
      <form>
        <input 
          type="text" 
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(e)=>onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search