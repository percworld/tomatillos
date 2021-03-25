import React from 'react';
import './Movie.css';

const Movie = ({id, image, showFeatured }) => {
    return (
        <article >
            <img className="mainCoverImage" src={image}/>
        </article> 
    )
}

export default Movie;

// onClick={() => showFeatured()}