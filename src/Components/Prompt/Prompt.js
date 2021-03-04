import React, {Component} from 'react';
import './Prompt.css';

const Prompt = ({handleClick}) => {
  //if clicked, fetch prompt
    return (
        <div className='prompt' onClick={handleClick}>
            <h2 className="prompt-title">Prompt</h2>

        </div>
    )
    
}

export default Prompt;