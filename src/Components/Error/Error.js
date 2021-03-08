import React from 'react';
import './Error.css';
import PropTypes from 'prop-types';

const Error = ({ type }) => {
  if(type === 'synonyms') {
    return (
        <section className='errorMessage'>
            <h2 className='errorText'>What a cool word! Just like you, it's so unique, we can't find anything like it.  Try again!</h2>
        </section>
    )
  } else if(type === 'rhymes') {
      return (
          <section className='errorMessage'>
              <h2 className='errorText'>You're so creative, you discovered a word that we can't rhyme anything with.  That's awesome.  Try another word!</h2>
          </section>
      )
  }
}

export default Error;

Error.propTypes = {
    type: PropTypes.string
}