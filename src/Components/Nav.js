import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Nav.css';

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
                Favorite Prompts
              </button>
          </Link>
        </div>
    </nav>  
  )
}

export default Nav;
