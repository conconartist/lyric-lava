import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section className="welcomePage">
        <h2 className='welcomeTitle'>Let your ideas flow.</h2>
        <div className='welcomeAffirmations'>
            <p className='welcome'>Take some time to create.</p>
            <p className='welcome'>Remove your distractions.</p>
            <p className='welcome'>Get settled in.</p>
            <p className='welcome'>Take a deep breath.</p>
            <p className='welcome'>Don't judge. Just write.</p>
            <Link to='/home'>
            <p className='enterButton'>Begin</p>
            </Link>
        </div>
        </section>
  )
}

export default Welcome;