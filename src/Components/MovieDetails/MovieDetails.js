import React from 'react';
import './MovieDetails.css';
import { FaClock } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

const MovieDetails = ({ film }) => {

    const { id, title, poster_path, average_rating, budget, genres, overview, release_date, revenue, runtime, tagline } = film;
    const roundedRating = Math.floor( average_rating * 100) / 100
    return (
        <section className='movie-details-container'>
            <div className='cover-container'>
                <img className='featured-cover' src={poster_path} />
            </div>
            <div className='movie-descrip-container'>
                <h1 className='title'>{title}</h1>
                <h4 className='tagline'>"{tagline}"</h4>
                <div className='row specs-box'>
                    <div className='row '>
                        <FaStar />
                        <p className='left-margin'>{roundedRating}</p>
                    </div>
                    <div className='row'>
                        {/* <p>{genres}</p> */}
                        <FaClock />
                        <p className='left-margin'>{runtime} min</p>
                    </div>
                </div>
                <h3 className='overview'>{overview}</h3>
                <div className='bottom-row'>
                    <div className='small-specs-box'>
                        <p>{budget}</p>
                        <p>{revenue}</p>
                    </div>
                    <div className='small-specs-box'><h4>{release_date}</h4></div>
                </div>
            </div>
        </section>
    )
}

export default MovieDetails; 