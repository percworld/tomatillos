import React from 'react';
import './Movie.css';

const Movie = ({ image }) => {
    return (
        <article>
            <img className="mainCoverImage" src={image}/>
        </article> 
    )
}

export default Movie;