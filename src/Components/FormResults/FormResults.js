import React from 'react';
import './FormResults.css';
import { Link } from 'react-router-dom';

const FormResults = ({ word, wordResults, type}) => {
  if(type === 'rhymes' && wordResults.length <= 10) {
    return (
      <div className='resultsContainerRhymes'>
        <h3 className='resultsHeadingRhymes'> Words that rhyme with "{word}": </h3>
        <section className='resultsListRhymes'>
          {wordResults && wordResults.map((rhymeWord, index) => (
            <p key={index} className='rhymeWord'>{rhymeWord}</p>
          ))}
        </section>
      </div>
    ) 
  } else if (type === 'rhymes' && wordResults.length > 10) {
    return (
      <div className='resultsContainerRhymes'>
        <h3 className='resultsHeadingRhymes'> Words that rhyme with "{word}": </h3>
        <section className='resultsListRhymes'>
          {wordResults && wordResults.slice(0, 10).map((rhymeWord, index) => (
            <p key={index} className='rhymeWord'>{rhymeWord}</p>
          ))}
        </section>
        <Link to='/rhymes'>
          <button className='listButton'>
            Click to see all results 
          </button>
        </Link>
      </div>
    )
  } else if(type === 'synonyms' && wordResults.length <= 10) {
    return (
      <div className="resultsContainerSynonyms">
        <h3 className="resultsHeadingSynonyms">Words that are similar to "{word}":</h3>
        <section className="resultsListSynonyms">
          {wordResults && wordResults.map((synonymWord, index) => (
            <p key={index} className='synonymWord'>{synonymWord}</p>
          ))}
        </section>
      </div>
    )
  } else if (type === 'synonyms' && wordResults.length > 10) {
    return (
      <div className='resultsContainerSynonyms'>
        <h3 className='resultsHeadingSynonyms'> Words that are similar to "{word}": </h3>
        <section className='resultsListSynonyms'>
          {wordResults && wordResults.slice(0, 10).map((synonymWord, index) => (
            <p key={index} className='synonymWord'>{synonymWord}</p>
          ))}
        </section>
        <Link to='/synonyms'>
          <button className='listButton'>
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