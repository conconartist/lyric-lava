import React from 'react';
import './FormResults.css';

const FormResults = ({ word, wordResults, type}) => {
  if(type === 'rhymes' && wordResults.length <= 10) {
    return (
      <div className='resultsContainer'>
        <h3 className='resultsHeading'> Words that rhyme with {word} </h3>
        <section className='resultsList'>
          {wordResults && wordResults.map((word, index) => (
            <p key={index} className='rhymeWord'>{word}</p>
          ))}
        </section>
      </div>
    ) 
  } else if (type === 'rhymes' && wordResults.length > 10) {
    return (
      <h3>Click to see all results</h3>
        //link to separate page
    )
    
//if more than 10 results, display first 10, click option for more on separate page 

  } else if(type === 'synonyms' && wordResults.length <= 10) {
    return (
      <div className="resultsContainer">
        <h3 className="resultsHeading">Words that are similar to {word}:</h3>
        <section className="resultsList">
          {wordResults && wordResults.map((word, index) => (
            <p key={index} className='synonymWord'>{word}</p>
          ))}
        </section>
      </div>
    )
  } else if (type === 'rhymes' && wordResults.length > 10) {
    return (
        <h3>Click to see all results</h3>
    )        
  } else {
    return null;
  }
}
export default FormResults;