import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FavPrompt = ({ id, prompt, deletePrompt }) => {
  const [promptId, setPromptId] = useState('')
  const deleteFavPrompt = (event) => {
    setPromptId(event.target.id)
    deletePrompt(promptId)
  }
  return (
    <div id={id} className='promptContainer'>
      <p className='favPrompt'>{prompt}</p>
      <button 
        id={id} 
        className='deleteButton' 
        onClick={deleteFavPrompt}>Delete
      </button>
    </div>
  )
}

export default FavPrompt;

FavPrompt.propTypes = {
  id: PropTypes.string.isRequired,
  prompt: PropTypes.string.isRequired,
  deletePrompt: PropTypes.func.isRequired
}