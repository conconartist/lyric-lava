import React from 'react';
import FavPrompt from '../FavPrompt/FavPrompt';
import './FavoritePrompts.css';
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
      <React.Fragment>
        <h3 class='favPromptsTitle'>Your Prompts</h3>
        <h4 class='noPromptsMessage'>No prompts saved.</h4>
      <Link to='/home'>
        <button className='homeButton'>Home</button>
      </Link>
      </React.Fragment>
      
    )
  } else {
    return (
      <React.Fragment>
        <h3 class='favPromptsTitle'>Your Prompts</h3>
        <div className='favPromptsContainer'>
          {prompts}
        </div>
      <Link to='/home'>
        <button className='homeButton'>Home</button>
      </Link>
      </React.Fragment>
  )
  }
}
export default FavoritePrompts;

FavoritePrompts.propTypes = {
    favPrompts: PropTypes.array,
    deletePrompt: PropTypes.func
}