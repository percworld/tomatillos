import React from 'react';
import './MovieDetails.css';
import { FaClock } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'; 


const MovieDetails = ({ film }) => {
    const { title, poster_path, average_rating, budget, overview, release_date, revenue, runtime, tagline } = film;
    const numberFormat = new Intl.NumberFormat('en-US');
    const roundedRating = Math.floor(average_rating * 100) / 100
    const formatDate = inputDate => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        let date = new Date(inputDate);
        return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    }

    return (
        <section className='movie-details-container'>
            <div className='cover-container'>
                <img className='featured-cover' src={poster_path} alt="Movie Poster" />
            </div>
            <div className='movie-descrip-container'>
                <h1 className='title'>{title}</h1>
                {tagline.length > 0 && <h4 className='tagline'>"{tagline}"</h4>}
                <div className='row specs-box'>
                    <div className='row '>
                        <FaStar />
                        <p className='left-margin'>{roundedRating}</p>
                    </div>
                    <div className='row'>
                        <FaClock />
                        <p className='left-margin'>{runtime} min</p>
                    </div>
                </div>
                <h3 className='overview'>{overview}</h3>
                <div className='bottom-row'>
                    <div className='small-specs-box'>
                        <p>Budget: ${numberFormat.format(budget)}</p>
                        <p>Revenue: ${numberFormat.format(revenue)}</p>
                    </div>
                    <div className='small-specs-box'><h4>Release Date: <br/>{formatDate(release_date)}</h4></div>
                </div>
                <div>
                    <Link to='/' style={{ textDecoration: 'none' }}><div className="backArrow">
                        <FaArrowAltCircleLeft />
                        <h6 className="go-back" >Go Back</h6></div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default MovieDetails;