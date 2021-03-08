import React from 'react';
import './Prompt.css';
import { Link } from 'react-router-dom';

const Prompt = ({ clickForPrompt, prompt, addToFavorites }) => {
  return (
    <React.Fragment>
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
        Favorite Prompts  
        </Link>
      </div>
      
    </React.Fragment>
  ) 
}

export default Prompt;