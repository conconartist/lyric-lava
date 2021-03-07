import React from 'react';
import WordList from '../WordList/WordList';
import './FormResults.css';
import { Link } from 'react-router-dom';

const FormResults = ({ word, wordResults, type}) => {
  if(type === 'rhymes' && wordResults.length <= 10) {
    return (
      <div className='resultsContainer'>
        <h3 className='resultsHeading'> Words that rhyme with "{word}": </h3>
        <section className='resultsList'>
          {wordResults && wordResults.map((word, index) => (
            <p key={index} className='rhymeWord'>{word}</p>
          ))}
        </section>
      </div>
    ) 
  } else if (type === 'rhymes' && wordResults.length > 10) {
    return (
      <div className='resultsContainer'>
        <h3 className='resultsHeading'> Words that rhyme with "{word}": </h3>
        <section className='resultsList'>
          {wordResults && wordResults.slice(0, 10).map((word, index) => (
            <p key={index} className='rhymeWord'>{word}</p>
          ))}
        </section>
        <Link to='/results'>
          <button onClick={() => <WordList key={word} word={word} wordResults={wordResults} type={type}/>}>Click to see all results</button>
        </Link>
      </div>
    )
  } else if(type === 'synonyms' && wordResults.length <= 10) {
    return (
      <div className="resultsContainer">
        <h3 className="resultsHeading">Words that are similar to "{word}":</h3>
        <section className="resultsList">
          {wordResults && wordResults.map((word, index) => (
            <p key={index} className='synonymWord'>{word}</p>
          ))}
        </section>
      </div>
    )
  } else if (type === 'synonyms' && wordResults.length > 10) {
    return (
      <div className='resultsContainer'>
        <h3 className='resultsHeading'> Words that are similar to "{word}": </h3>
        <section className='resultsList'>
          {wordResults && wordResults.slice(0, 10).map((word, index) => (
            <p key={index} className='synonymWord'>{word}</p>
          ))}
        </section>
        <Link to='/results'>
          <button onClick={() => <WordList key={word} word={word} wordResults={wordResults} type={type}/>}>Click to see all results</button>
        </Link>
       
      </div>  
    )        
  } else {
    return null;
  }
}
export default FormResults;