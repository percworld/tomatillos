import React from 'react';
import './Movie.css';

const Movie = ({ id, title, image }) => {
    return (
        <article className='filmCard'>
            <img className="mainCoverImage" src={image}/>
        </article> 
    )
}

export default Movie;