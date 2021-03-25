import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({id, title, poster_path}) => {
    return (
        <section>
            <div>
            <h1 className='title'>Hello</h1>
                <img src={poster_path} />
            </div>
            <div>

            </div>
        </section>
    )
}



export default MovieDetails; 