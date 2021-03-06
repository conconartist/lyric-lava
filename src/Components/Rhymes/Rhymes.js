import React from 'react';
import './Rhymes.css';

const Rhymes = ({ word, rhymes }) => {
    return (
        <div className='rhymeContainer'>
            <h3 className='rhymeHeading'> Words that rhyme with {word} </h3>
            <section className='rhymeList'>
                {rhymes && rhymes.map((word, index) => (
                    <p key={index} className='rhyme'>{word}</p>
                ))}
            </section>
        </div>
    )
}
export default Rhymes;