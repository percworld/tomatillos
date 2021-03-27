import React from 'react';
import './MovieDetails.css';
import { FaArrowAltCircleLeft } from 'react-icons/fa'


const MovieDetails = ({ film, showHome }) => {
    const { title, poster_path, average_rating, budget, overview, release_date, revenue, runtime, tagline } = film;
    const numberFormat = new Intl.NumberFormat('en-US');

    const formatDate = inputDate => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        let date = new Date(inputDate);
        return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    }

    return (
        <section className='movie-details-container'>
            <div>
                <img className='featured-cover' src={poster_path} alt="movie poster" />
            </div>
            <div className='movie-descrip-container'>
                <h1 className='title'>{title}</h1>
                <h4>{tagline}</h4>
                <div>
                    <p>{average_rating}/5 Rotten Tomatillos</p>
                    {/* <p>{genres}</p> */}
                    <p>{runtime} min</p>
                </div>
                <h5>{overview}</h5>
                <div>
                    <div>
                        <p>Budget: ${numberFormat.format(budget)}</p>
                        <p>Revenue: ${numberFormat.format(revenue)}</p>
                    </div>
                    <div><h4>Release Date: {formatDate(release_date)}</h4></div>
                </div>
                <div className="backArrow" onClick={() => showHome()}>
                    <FaArrowAltCircleLeft />
                </div>

            </div>
        </section>
    )
}

export default MovieDetails;