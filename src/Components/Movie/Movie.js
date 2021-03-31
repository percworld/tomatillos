import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom'; 

const Movie = ({ id, image, showFeatured }) => {
    return (
        <article className="movie" onClick={() => showFeatured(id)}>
            <Link to={`${id}`}><img className="mainCoverImage" src={image} alt="movieImage" /></Link>
        </article>
    )
}

export default Movie;
