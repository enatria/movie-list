import React, { useState } from 'react';
import './index.css'

function Search({action}) {
    const [value, setValue] = useState('')
    const onClickHandler = (e) => {
        e.preventDefault()
        console.log('di klik')
        action(value)
    }
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder='search some movies...'
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            <button
                className="btn btn-outline-light my-2 my-sm-0 ml-2"
                type="submit"
                onClick={(e) => onClickHandler(e)}>Search</button>
        </div>
    );
}

export default Search;
