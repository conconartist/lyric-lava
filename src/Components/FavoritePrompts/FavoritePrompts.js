import React from 'react';
import FavPrompt from '../FavPrompt/FavPrompt';
import './FavoritePrompts.css';
import { Link } from 'react-router-dom';

const FavoritePrompts = ( {favPrompts, deletePrompt}) => {
        console.log('fav', favPrompts)
        return (
            <React.Fragment>
            <h3>Your Prompts</h3>
            <div className='favPromptsContainer'>
                {favPrompts && favPrompts.map((prompt, index) => (
                    <FavPrompt 
                      id={prompt}
                      prompt={prompt}
                      deletePrompt={deletePrompt}
                      key={prompt}
                    /> 
                ))}
            </div>
            <Link to='/home'>
                Go back
            </Link>
            </React.Fragment>
        )
    
}
export default FavoritePrompts;