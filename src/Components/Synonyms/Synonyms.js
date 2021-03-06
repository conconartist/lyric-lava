import React from 'react';
import './Synonyms.css';

const Synonyms = ({ word, synonyms }) => {

    return (
        <div className="synonymContainer">
            <h3 className="synonymHeading">Words that are similar to {word}:</h3>
            <section className="synonymList">
                {synonyms && synonyms.map((word, index) => (
                    <p key={index} className='synonym'>{word}</p>
                ))}
            </section>
        </div>
    )
}

export default Synonyms;