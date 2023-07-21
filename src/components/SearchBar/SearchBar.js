import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import "./SearchBar.css";

function SearchBar({ handleSearch }) {

    return (
        <form className="searchWrapper" onSubmit={handleSearch}>
            <input className="searchInput" name='search' placeholder="Enter A Song, Album, or Artist" type="text" />
            <button className="searchButton" type="submit"><span className="searchIcon"><FontAwesomeIcon icon={faSearch} /></span> Search</button>
        </form>
    )
}
export default SearchBar;
