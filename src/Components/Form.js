import React, { useState } from 'react';
import '../assets/Form.css';
import PropTypes from 'prop-types';

const Form = ( { searchForRhymes, searchForSimilar }) => {
  const [userInput, setUserInput] = useState('');
  const searchWords = (event) => {
    setUserInput(event.target.value)
  }
  const searchRhymingWords = (event) => {
    event.preventDefault()
    searchForRhymes(userInput)
    }
  const searchSimilarWords = (event) => {
    event.preventDefault()
    searchForSimilar(userInput)
  }

  return(
    <form className='searchForm'>
      <input
        className='searchBar'
        type='text'
        placeholder='Enter Word'
        value={userInput}
        onChange={searchWords}
        aria-label='Search Similar Words'
        aria-required='true'
      >
      </input>
      <div className='searchButtonContainer'>
        <button className='buttonRhymes' onClick={searchRhymingWords}>Rhymes</button>
        <button className='buttonThesaurus' onClick={searchSimilarWords} >Synonyms</button>
      </div>
    </form>
  )
}
export default Form;

Form.propTypes = {
  searchForSimilar: PropTypes.func.isRequired
}
