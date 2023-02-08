import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Nav.css';
import titleImg from "../assets/lyric-lava-title.png"

const Nav = () => {
  return (
    <nav>
      <Link to='/home'>
        <img src={titleImg} />
      </Link>
      <div className='linkContainer'>
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
