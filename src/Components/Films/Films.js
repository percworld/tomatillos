import React from 'react';
import Movie from '../Movie/Movie';
import './Films.css';


const Films = ({films, showFeatured}) => {
    
    const movieCovers = films.map(film => {
        return (
            <Movie 
                id={film.id}
                key={film.id}
                // title={film.title}
                image={film.poster_path}
                showFeatured={showFeatured}
            />
        )
    })

    return (
        <main>
            <section className="top-container">
                <input className="search-bar" type={"text"} placeholder={"SEARCH"}></input>
                <button className="submit-btn">Submit</button>
            </section>
            <section className="gridDisplay">
                {movieCovers}
            </section>
        </main>
        
    )
}

export default Films;