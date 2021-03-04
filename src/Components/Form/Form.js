import React, { useState } from 'react';
import './Form.css';

const Form = ( { displayRhymingWords, displaySimilarWords }) => {
  const [userInput, setUserInput] = useState('');
  const searchSimilarWords = (event) => {
      setUserInput(event.target.value)
  }
  const searchRhymingWords = (event) => {
      setUserInput(event.target.value)
  }

  return(
    <div className='wordSearchForm'>
      <form className='similarWordsForm'>
        <input
          type='text'
          placeholder='Enter Word'
          value={userInput}
          onChange={searchSimilarWords}
        >
        </input>
        <button className='buttonThesaurus' onClick={displaySimilarWords}>Get Similar Words</button>
      </form>
      <form className='rhymingWordsForm'>
        <input
          type='text'
          placeholder='Enter Word'
          value={userInput}
          onChange={searchRhymingWords}
        >
        </input>
        <button className='buttonRhymingWords' onClick={displayRhymingWords}>Get Rhyming Words</button>
      </form>
    </div>
    
  )
}
export default Form;