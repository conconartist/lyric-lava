import React from 'react';
import './Word.css';
import PropTypes from 'prop-types';

const Word = ({id, word}) => {
    return (
        <p id={id} className='singleWord'>{word}</p>
    )
}

export default Word;

Word.propTypes = {
    id: PropTypes.string,
    word: PropTypes.string
}