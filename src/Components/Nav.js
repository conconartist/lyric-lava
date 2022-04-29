import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
        <div className='linkContainer'>
          <Link to='/home'>
                Home
          </Link>
          <Link to='/favorite-prompts'>
              <button className='favPromptButton'>
                FavoritePrompts
              </button>
          </Link>
        </div>
        <h1 className='title'>Lyric Lava</h1>
    </nav>  
  )
}

export default Nav;
