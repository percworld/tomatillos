import React from 'react';
import Movie from '../Movie/Movie';
import './Films.css';
import Searchbar from '../Search_bar/Search_bar';
import PropTypes from 'prop-types';

const Films = ({ films, showFeatured, handleSearchEntry, searchByWord, searchField }) => {
    const movieCovers = films.map(film => {
        return (
            <Movie
                id={film.id}
                key={film.id}
                image={film.poster_path}
                showFeatured={showFeatured}
            />
        )
    })

    return (
        <main>
            <Searchbar handleSearchEntry={handleSearchEntry} searchByWord={searchByWord} searchField={searchField} />
            <section className="gridDisplay">
                {movieCovers}
            </section>
        </main >
    )
}

export default Films;

Films.propTypes = {
    films: PropTypes.array,
    showFeatured: PropTypes.func,
    searchByWord: PropTypes.func,
    searchField: PropTypes.string,
    handleSearchEntry: PropTypes.func
}