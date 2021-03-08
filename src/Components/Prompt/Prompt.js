import React from 'react';
import './Prompt.css';
import { Link } from 'react-router-dom';
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
      <div className='promptButtonContainer'>
        <button className='favoritesButton' onClick={addToFavorites}>
        Add to Favorites
        </button>
        <Link to='/favorite-prompts'>
          <button className='promptsPageButton'>Favorite Prompts </button> 
        </Link>
      </div>
    </div>
  ) 
}

export default Prompt;

Prompt.propTypes = {
  clickForPrompt: PropTypes.func, 
  prompt: PropTypes.string, 
  addToFavorites: PropTypes.func
}