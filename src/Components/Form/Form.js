import React from 'react';
import './Form.css';

const Form = () => {

  return(
    <div className='wordSearchForm'>
      <form className='similarWordsForm'>
        <input
          type='text'
          placeholder='Similar Words'
          value={userInput}
          onChange={searchThesaurus}
        >
        </input>
        <button className='buttonThesaurus' onClick={}></button>
      </form>
      <form className='rhymingWordsForm'>
        <input
          type='text'
          placeholder='Rhyming Words'
          value={userInput}
          onChange={searchRhymingWords}
        >
        </input>
        <button className='buttonRhymingWords' onClick={}></button>
      </form>
    </div>
    
  )
}
export default Form;