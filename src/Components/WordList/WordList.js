import React from 'react';
import './WordList.css';

const WordList = ({match, word, wordResults, type}) => {
    console.log(word)
    console.log(wordResults)
    console.log(type)
    if (type === 'rhymes') {
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
    } else if(type === 'synonyms') {
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
    } else {
        return null
    }
}
export default WordList;