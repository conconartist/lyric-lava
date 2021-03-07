import React, { useState } from 'react';
import './SynonymForm.css';

const SynonymForm = ( { searchForSimilar }) => {
  const [userInput, setUserInput] = useState('');
  const searchSimilarWords = (event) => {
    event.preventDefault()
    setUserInput(event.target.value)
      searchForSimilar(userInput)
  }

  return(

    <div className='synonymSearchForm'>
      <form className='similarWordsForm'>
        <input
          className='synonymSearchBar'
          type='text'
          placeholder='Enter Word'
          value={userInput}
          onChange={searchSimilarWords}
        >
        </input>
        <button className='buttonThesaurus' onClick={searchSimilarWords} >Get Similar Words</button>
      </form>
    </div> 
  )
}
export default SynonymForm;