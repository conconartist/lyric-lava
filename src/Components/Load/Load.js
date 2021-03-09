import React from 'react';
import './Load.css';
import PropTypes from 'prop-types';

const Load = ({type}) => {
  return (
    <section className='loadingMessage'>
      <h2 className='loadingText'>Loading {type}...</h2>
    </section>
  )
}

export default Load;

Load.propTypes = {
    type: PropTypes.string.isRequired
}