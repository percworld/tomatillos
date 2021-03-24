import React from 'react';
import './Movie.css';

const Movie = ({ id, title, image }) => {
    return (
        <article className='filmCard' image='{image}'>
            <h3>{title}</h3>
        </article> 
    )
}

export default Movie;