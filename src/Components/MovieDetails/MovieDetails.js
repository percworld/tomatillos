import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ film }) => {

    const { id, title, poster_path, average_rating, budget, genres, overview, release_date, revenue, runtime, tagline } = film;

    return (
        <section className='movie-details-container'>
            <div>
                <img className='featured-cover' src={poster_path} />
            </div>
            <div className='movie-descrip-container'>
                <h1 className='title'>{title}</h1>
                <h4>{tagline}</h4>
                <div>
                    <p>{average_rating}</p>
                    {/* <p>{genres}</p> */}
                    <p>{runtime} min</p>
                </div>
                <h5>{overview}</h5>
                <div>
                    <div>
                        <p>{budget}</p>
                        <p>{revenue}</p>
                    </div>
                    <div><h4>{release_date}</h4></div>
                </div>
            </div>
        </section>
    )
}

export default MovieDetails; 