import React from 'react';
import Movie from '../Movie/Movie';
import './Films.css';

const Films = ({films}) => {
    
    return (
        <section className="cardsContainer">
            {films.movies.map(film => {
                return (
                    <Movie 
                        key={film.id}
                        title={film.title}
                        image={film.poster_path}
                    />
                )
            })}
        </section>
    )
}

export default Films;