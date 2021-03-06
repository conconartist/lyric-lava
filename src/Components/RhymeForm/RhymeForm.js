import React, { useState } from 'react';
import './RhymeForm.css';

const RhymeForm = ( { searchForRhymes }) => {
    const [userInput, setUserInput] = useState('');
    const searchRhymingWords = (event) => {
        event.preventDefault()
        setUserInput(event.target.value)
        searchForRhymes(userInput)
    }
//if more than 10 results, display first 10, click option for more on separate page 
    return (
        <div className='rhymeSearchForm'>
            <form className='rhymeWordsForm'>
                <input
                  type='text'
                  placeholder='Enter Word'
                  value={userInput}
                  onChange={searchRhymingWords}
                >
                </input>
                <button className='buttonRhymes' onClick={searchRhymingWords}> Get Rhyming Words </button>
            </form>
        </div>
    )
}
export default RhymeForm;