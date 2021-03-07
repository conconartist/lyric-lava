import React from 'react';
import './FormResults.css';
import { Link } from 'react-router-dom';

const FormResults = ({ word, wordResults, type}) => {
  if(type === 'rhymes' && wordResults.length <= 10) {
    return (
      <div className='resultsContainer'>
        <h3 className='resultsHeading'> Words that rhyme with "{word}": </h3>
        <section className='resultsList'>
          {wordResults && wordResults.map((rhymeWord, index) => (
            <p key={index} className='rhymeWord'>{rhymeWord}</p>
          ))}
        </section>
      </div>
    ) 
  } else if (type === 'rhymes' && wordResults.length > 10) {
    return (
      <div className='resultsContainer'>
        <h3 className='resultsHeading'> Words that rhyme with "{word}": </h3>
        <section className='resultsList'>
          {wordResults && wordResults.slice(0, 10).map((rhymeWord, index) => (
            <p key={index} className='rhymeWord'>{rhymeWord}</p>
          ))}
        </section>
        <Link to='/rhymes'>
          <button>
            Click to see all results 
          </button>
        </Link>
      </div>
    )
  } else if(type === 'synonyms' && wordResults.length <= 10) {
    return (
      <div className="resultsContainer">
        <h3 className="resultsHeading">Words that are similar to "{word}":</h3>
        <section className="resultsList">
          {wordResults && wordResults.map((synonymWord, index) => (
            <p key={index} className='synonymWord'>{synonymWord}</p>
          ))}
        </section>
      </div>
    )
  } else if (type === 'synonyms' && wordResults.length > 10) {
    return (
      <div className='resultsContainer'>
        <h3 className='resultsHeading'> Words that are similar to "{word}": </h3>
        <section className='resultsList'>
          {wordResults && wordResults.slice(0, 10).map((synonymWord, index) => (
            <p key={index} className='synonymWord'>{synonymWord}</p>
          ))}
        </section>
        <Link to='/synonyms'>
          <button>
            Click to see all results
          </button>
        </Link>
      </div>  
    )        
  } else {
    return (
      null
    )
  }
}
export default FormResults;