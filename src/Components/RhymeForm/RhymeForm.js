import React, { useState } from 'react';
import './RhymeForm.css';

const RhymeForm = ( { searchForRhymes }) => {
    const [userInput, setUserInput] = useState('');
    const searchRhymingWords = (event) => {
        setUserInput(event.target.value)
        searchForRhymes(userInput)
    }
    return (
        <div className='rhymeSearchForm'>
            <form className='rhymeWordsForm'>
                <input
                  type='text'
                  placeholder='Enter Word'
                  value={userInput}
                  onChange={searchForRhymes}
                >
                </input>
                <button className='buttonRhymes' onClick={searchForRhymes}> Get Rhyming Words </button>
            </form>
        </div>
    )
}
export default RhymeForm;