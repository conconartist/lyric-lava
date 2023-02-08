import React from 'react';
import FavPrompt from './FavPrompt';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FavoritePrompts = ( {favPrompts, deletePrompt}) => {
    const prompts = favPrompts.map((prompt) => {
      return <FavPrompt
        id={prompt}
        prompt={prompt}
        deletePrompt={deletePrompt}
        key={prompt}
      />
    })
  if(favPrompts.length === 0) {
    return (
      <div className="favPromptBackground">
        <h3 className='favPromptsTitle'>Your Prompts</h3>
        <h4 className='noPromptsMessage'>No prompts saved.</h4>
        <Link to='/home'>
          <button className='homeButton'>Home</button>
        </Link>
      </div>

    )
  } else {
    return (
      <div className="favPromptBackground">
        <h3 class='favPromptsTitle'>Your Prompts</h3>
        <div className='favPromptsContainer'>
          {prompts}
        </div>
        <Link to='/home'>
          <button className='homeButton'>Home</button>
        </Link>
      </div>
  )
  }
}
export default FavoritePrompts;

FavoritePrompts.propTypes = {
    favPrompts: PropTypes.array.isRequired,
    deletePrompt: PropTypes.func.isRequired
}
