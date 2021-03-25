import React from 'react';
import './Movie.css';

const Movie = ({id, image, showFeatured }) => {
    return (
        <article onClick={() => showFeatured(id)}>
            <img className="mainCoverImage" src={image}/>
        </article> 
    )
}

export default Movie;
