import React from 'react';
import Movie from '../Movie/Movie';
import './Films.css';
import reel from '../movie-reel.jpeg'; 


const Films = ({films}) => {
    
    return (
        <main>
            <section className="top-container">
                <img className="header-img" src={reel}></img>
                <input className="search-bar" type={"text"} placeholder={"SEARCH"}></input>
            </section>
            <section className="gridDisplay">
                {films.map(film => {
                    return (
                        <Movie 
                            key={film.id}
                            title={film.title}
                            image={film.poster_path}
                        />
                    )
                })}
            </section>
        </main>
        
    )
}

export default Films;