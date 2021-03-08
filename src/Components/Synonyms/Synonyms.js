import React from 'react';
import './Synonyms.css';
import Word from '../Word/Word';
import PropTypes from 'prop-types';

const Synonyms = ({ word, synonyms }) => {
  const synonymList = synonyms.map((word, index) => {
      <Word 
        id={word}
        word={word}
        key={index}
      />
  })
  return (
    <div className="synonymContainer">
      <h3 className="synonymHeading">Words that are similar to {word}:</h3>
        <section className="synonymList">
          {synonymList}
        </section>
    </div>
  )
}

export default Synonyms;

Synonyms.propTypes = {
  word: PropTypes.string,
  synonyms: PropTypes.array
}