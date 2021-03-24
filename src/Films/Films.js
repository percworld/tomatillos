import React from 'react';
import Movie from '../Movie/Movie';
import './Films.css';

const Films = ({films}) => {
    
    return (
        <section className="cardsContainer">
            {films.movies.map(film => {
                return (
                    <Movie 
                        className="card"
                        key={film.id}
                        title={film.title}
                        backgroundImage={film.poster_path}
                    />
                )
            })}
        </section>
    )
}

export default Films;