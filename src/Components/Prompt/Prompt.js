import React from 'react';
import './Prompt.css';

const Prompt = ({ clickForPrompt, prompt }) => {

  return (
    <div className='prompt' onClick={clickForPrompt}>
      <h2 className='promptTitle'>Prompt</h2>
    </div>
  ) 
}

export default Prompt;