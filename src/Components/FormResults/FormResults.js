import React from 'react';
import './FormResults.css';

const FormResults = ({ word, wordResults, type }) => {
  if(type === 'rhymes') {
    return (
      <div className='rhymesContainer'>
        <h3 className='rhymeHeading'> Words that rhyme with {word} </h3>
        <section className='rhymeList'>
          {wordResults && wordResults.map((word, index) => (
            <p key={index} className='rhyme'>{word}</p>
          ))}
        </section>
      </div>
    )
  } else if(type === 'synonyms') {
    return (
      <div className="synonymContainer">
        <h3 className="synonymHeading">Words that are similar to {word}:</h3>
        <section className="synonymList">
          {wordResults && wordResults.map((word, index) => (
            <p key={index} className='synonym'>{word}</p>
          ))}
        </section>
      </div>
    )
  }
}
export default FormResults;