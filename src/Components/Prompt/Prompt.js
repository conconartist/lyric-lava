import React from 'react';
import './Prompt.css';

const Prompt = ({ clickForPrompt, prompt }) => {

    return (
        <div className='prompt'>
            <h2 className='promptTitle'>Prompt</h2>
            <h3 className='promptSuggestion'>{prompt}</h3>
            <button className='promptButton' onClick={clickForPrompt}>Click</button>
        </div>
    )
    
}

export default Prompt;