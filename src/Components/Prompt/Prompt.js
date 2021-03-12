import React from 'react';
import './Prompt.css';
import PropTypes from 'prop-types';

const Prompt = ({ clickForPrompt, prompt, addToFavorites }) => {

  return (
    <div className='promptContainer'>
      <div className='prompt' onClick={clickForPrompt}>
        <h2 className='promptTitle'>Prompt</h2>
      </div>
      <div className='promptDisplay'>
        <h3 className='promptHeading'>Your prompt:</h3>
        <p className='promptResult'>{prompt}</p>
      </div>
        <button className='favoritesButton' onClick={addToFavorites}>
        Add to Favorites
        </button>
    </div>
  ) 
}

export default Prompt;

Prompt.propTypes = {
  clickForPrompt: PropTypes.func.isRequired, 
  prompt: PropTypes.string.isRequired, 
  addToFavorites: PropTypes.func.isRequired
}