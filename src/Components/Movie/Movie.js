import React from 'react';
import './Movie.css';

const Movie = ({ id, image, showFeatured }) => {
    return (
        <article className="movie" onClick={() => showFeatured(id)}>
            <img className="mainCoverImage" src={image} alt="movieImage" />
        </article>
    )
}

export default Movie;
