import React from 'react';
import Word from './Word';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FormResults = ({ word, wordResults, type}) => {
  const results = wordResults.map((word, index) => {
    return <Word 
      id={word}
      word={word}
      key={index}
    />
  })
  const longResults = wordResults.slice(0, 10).map((word, index) => {
    return <Word 
      id={word}
      word={word}
      key={index}
    />
  })
  if(type === 'rhymes' && wordResults.length <= 10) {
    return (
      <div className='resultsContainerRhymes'>
        <h3 className='resultsHeadingRhymes'> Words that rhyme with "{word}": </h3>
        <section className='resultsListRhymes'>
          {results}
        </section>
      </div>
    ) 
  } else if (type === 'rhymes' && wordResults.length > 10) {
    return (
      <div className='resultsContainerRhymes'>
        <h3 className='resultsHeadingRhymes'> Words that rhyme with "{word}": </h3>
        <section className='resultsListRhymes'>
          {longResults}
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
          {results}
        </section>
      </div>
    )
  } else if (type === 'synonyms' && wordResults.length > 10) {
    return (
      <div className='resultsContainerSynonyms'>
        <h3 className='resultsHeadingSynonyms'> Words that are similar to "{word}": </h3>
        <section className='resultsListSynonyms'>
          {longResults}
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

FormResults.propTypes = {
  word: PropTypes.string.isRequired,
  wordResults: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
}