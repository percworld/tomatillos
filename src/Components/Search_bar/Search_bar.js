import React from 'react';
import './search_bar.css';

const Searchbar = ({ handleSearchEntry, searchByWord, searchField }) => {
    return (
        <form className="top-container">
            <input className="search-bar"
                type={"text"}
                placeholder={"SEARCH TITLES"}
                name={"searchField"}
                value={searchField}
                onChange={event => handleSearchEntry(event)}
            ></input>
            <button className="submit-btn" onClick={event => searchByWord(event)}>Submit</button>
        </form>
    )
}
export default Searchbar;