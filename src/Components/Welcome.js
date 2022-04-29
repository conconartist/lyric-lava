import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section className="welcomePage">
      <h2 className='welcomeTitle'>Let your ideas flow.</h2>
      <div className='welcomeAffirmations'>
        <Link to='/home'>
          <p className='enterButton'>Begin</p>
        </Link>
      </div>
      </section>
  )
}

export default Welcome;
