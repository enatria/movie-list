import React from 'react';
import './index.css'
function Search() {
    return (
        <div className="search-bar">
            <input type="text" placeholder='search some movies...' />
            <button className="btn btn-outline-light my-2 my-sm-0 ml-2" type="submit">Search</button>
        </div>
    );
}

export default Search;
