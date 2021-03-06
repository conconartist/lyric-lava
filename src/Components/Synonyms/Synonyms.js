import React from 'react';
import './Synonyms.css';

const Synonyms = ({ word, synonyms }) => {
    // console.log(word)
    // console.log(synonyms)
    // const words = () => {
    //     if(synonyms){
    //         return synonyms.map(word => word)
    //     }
    // }

    return (
        <div className="synonymContainer">
            <h3 className="synonymHeading">Words that are similar to {word}:</h3>
            <section className="synonymList">
                {synonyms}
            </section>
        </div>
    )
}

export default Synonyms;