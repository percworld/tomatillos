import React from 'react';
import Movie from '../Movie/Movie';
import './Films.css';


const Films = ({ films, showFeatured, handleSearchEntry, searchByWord, searchField }) => {
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
                <input className="search-bar"
                    type={"text"}
                    placeholder={"SEARCH"}
                    name={"searchField"}
                    value={searchField}
                    onChange={event => handleSearchEntry(event)}
                ></input>
                <button className="submit-btn" onClick={event => searchByWord(event)}>Submit</button>
            </section>
            <section className="gridDisplay">
                {movieCovers}
            </section>
        </main>

    )
}

export default Films;