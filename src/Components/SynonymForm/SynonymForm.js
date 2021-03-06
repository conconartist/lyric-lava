import React, { useState } from 'react';
import './SynonymForm.css';

const SynonymForm = ( { searchForSimilar }) => {
  const [userInput, setUserInput] = useState('');
  const searchSimilarWords = (event) => {
    event.preventDefault()
    setUserInput(event.target.value)
      searchForSimilar(userInput)

      // searchForSimilar(event, userInput)
  }
  // const searchRhymingWords = (event) => {

  //     setUserInput(event.target.value)
  // }

  //radio buttons instead
  //go to separate page display
  return(

    <div className='synonymSearchForm'>
      <form className='similarWordsForm'>
        <input
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