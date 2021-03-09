import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <h1 className='title'>Lyric Lava</h1>
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
    </nav>  
  )
}

export default Nav;
