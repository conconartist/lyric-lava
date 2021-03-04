import React, {Component} from 'react';
import './Prompt.css';

const Prompt = ({clickForPrompt}) => {
  //if clicked, fetch prompt
  const suggestPrompt = () => {

  }
    return (
        <div className='prompt' onClick={clickForPrompt}>
            <h2 className='promptTitle'>Prompt</h2>
            <h3 className='promptSuggestion'>{suggestPrompt}</h3>
        </div>
    )
    
}

export default Prompt;