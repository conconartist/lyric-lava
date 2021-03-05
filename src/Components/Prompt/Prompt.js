import React from 'react';
import './Prompt.css';

const Prompt = ({ clickForPrompt, prompt }) => {

  return (
    <div className='prompt' onClick={clickForPrompt}>
      <h2 className='promptTitle'>Prompt</h2>
      <h3 className='promptSuggestion'>{prompt}</h3>
    </div>
  ) 
}

export default Prompt;