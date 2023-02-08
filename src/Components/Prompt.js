import React from 'react';
import '../assets/Prompt.css';
import PropTypes from 'prop-types';
import fullHeart from '../assets/heart-filled.png';
import emptyHeart from '../assets/heart-empty.png';

const Prompt = ({ clickForPrompt, prompt, addToFavorites }) => {

  return (
    <div className='promptContainer'>
      <div className='promptDisplay'>
        {prompt && <>
          <h3 className='promptHeading'>Your prompt:</h3>
          <p className='promptResult'>{prompt}</p>
          <button className='favoritesButton' onClick={addToFavorites}>
            Add to Favorites
          </button>
        </>}
      </div>
      <div className='prompt' onClick={clickForPrompt}>
        <h4 className='promptTitle'>Need a Prompt?</h4>
      </div>
    </div>
  )
}

export default Prompt;

Prompt.propTypes = {
  clickForPrompt: PropTypes.func.isRequired,
  prompt: PropTypes.string.isRequired,
  addToFavorites: PropTypes.func.isRequired
}
