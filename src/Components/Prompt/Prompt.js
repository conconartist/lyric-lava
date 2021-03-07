import React from 'react';
import './Prompt.css';

const Prompt = ({ clickForPrompt, prompt }) => {
  return (
    <React.Fragment>
      <div className='prompt' onClick={clickForPrompt}>
        <h2 className='promptTitle'>Prompt</h2>
      </div>
      <div className='promptDisplay'>
        <h3 className='promptHeading'>Your prompt:</h3>
        <p>{prompt}</p>
      </div>
    </React.Fragment>
  ) 
}

export default Prompt;