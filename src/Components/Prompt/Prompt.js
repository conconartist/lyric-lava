import React from 'react';
import './Prompt.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FavoritePrompts from '../FavoritePrompts/FavoritePrompts';

const Prompt = ({ clickForPrompt, prompt, addToFavorites, favoritePrompts }) => {
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
        <Link to='/favorite-prompts' className='favPromptButton'>
        Favorite Prompts
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