import React from 'react';
import './WordList.css';
import { Link } from 'react-router-dom';

const WordList = ({word, wordResults, type}) => {
    if (type === 'rhymes') {
        return (
          <div className='resultsContainer'>
            <h3 className='resultsHeading'> Words that rhyme with "{word}": </h3>
            <section className='resultsList'>
              {wordResults && wordResults.map((rhymeWord, index) => (
                <p key={index} className='rhymeWord'>{rhymeWord}</p>
              ))}
            </section>
            <Link to='/home'>
                <button>Home</button>
            </Link>
          </div>
        )
    } else if(type === 'synonyms') {
        return (
          <div className="resultsContainer">
            <h3 className="resultsHeading">Words that are similar to "{word}":</h3>
            <section className="resultsList">
              {wordResults && wordResults.map((synonymWord, index) => (
                <p key={index} className='synonymWord'>{synonymWord}</p>
              ))}
            </section>
            <Link to='/home'>
                <button>Home</button>
            </Link>
          </div>
        )
    } else {
        return null
    }
}
export default WordList;