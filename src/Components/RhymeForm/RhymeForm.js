import React, { useState } from 'react';
import './RhymeForm.css';
import PropTypes from 'prop-types';

const RhymeForm = ( { searchForRhymes }) => {
  const [userInput, setUserInput] = useState('');
  const searchRhymingWords = (event) => {
    event.preventDefault()
    setUserInput(event.target.value)
    searchForRhymes(userInput)
    }
  return (
    <div className='rhymeSearchForm'>
      <form className='rhymeWordsForm'>
        <input
          className='rhymeSearchBar'
          type='text'
          placeholder='Enter Word'
          value={userInput}
          onChange={searchRhymingWords}
          aria-label='Rhyme Search Form'
          aria-required='true'
        >
        </input>
        <button className='buttonRhymes' onClick={searchRhymingWords}> Get Rhyming Words </button>
      </form>
    </div>
  )
}
export default RhymeForm;

RhymeForm.propTypes = {
    searchForRhymes: PropTypes.func
}