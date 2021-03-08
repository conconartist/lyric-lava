import React from 'react';
import './Load.css';

const Load = ({type}) => {
    return (
        <section className='loadingMessage'>
            <h2 className='loadingText'>Loading {type}...</h2>
        </section>
    )
}

export default Load;