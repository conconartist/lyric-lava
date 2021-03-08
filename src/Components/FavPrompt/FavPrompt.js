import React, { useState } from 'react';
import './FavPrompt.css';

const FavPrompt = ({ id, prompt, deletePrompt }) => {
    const [promptId, setPromptId] = useState('')
    const deleteFavPrompt = (event) => {
        // event.preventDefault()
        setPromptId(event.target.id)
        deletePrompt(promptId)

    }
 return (
    <div id={id} className='promptContainer'>
    <p className='favPrompt'>{prompt}</p>
    <button id={id} className='deleteButton' onClick={deleteFavPrompt}>Delete</button>
    </div>
 )
}
export default FavPrompt;
