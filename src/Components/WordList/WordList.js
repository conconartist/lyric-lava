import React from 'react';
import './WordList.css';
import { Link } from 'react-router-dom';
import Word from '../Word/Word';
import PropTypes from 'prop-types';

const WordList = ({word, wordResults, type}) => {
  const list = wordResults.map((word, index) => {
    return <Word 
      id={word}
      word={word}
      key={index}
    />
  })
  if (type === 'rhymes') {
    return (
      <div className='resultsContainer'>
        <h3 className='resultsHeading'> Words that rhyme with "{word}": </h3>
        <section className='resultsList'>
          {list}
        </section>
        <div className='homeButtonContainer'>
          <Link to='/home'>
            <button className='homeButton'>Home</button>
          </Link>
        </div>   
      </div>
    )
  } else if(type === 'synonyms') {
    return (
      <div className="resultsContainer">
        <h3 className="resultsHeading">Words that are similar to "{word}":</h3>
        <section className="resultsList">
          {list}
        </section>
          <Link to='/home'>
            <button className='homeButton'>Home</button>
          </Link>
      </div>
    )
  } else {
    return null
  }
}
export default WordList;

WordList.propTypes = {
  word: PropTypes.string.isRequired, 
  wordResults: PropTypes.array.isRequired, 
  type: PropTypes.string.isRequired
}