import React, { useState } from 'react';
import './Form.css';
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
    <div className='searchFormContainer'>
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
        <button className='buttonRhymes' onClick={searchRhymingWords}> Get Rhyming Words </button>
        <button className='buttonThesaurus' onClick={searchSimilarWords} >Get Similar Words</button>
      </form>
    </div> 
  )
}
export default Form;

Form.propTypes = {
  searchForSimilar: PropTypes.func.isRequired
}