import React from 'react';

const SearchBox = ({searchChange}) => {
    console.log("Searchbox");
    return (
        <div className='pa2'>
            <input
            aria-label="Search Robots"
            type="search"
            placeholder="Search robots"
            className="pa3 ba b--green bg-lightest-blue"
            onChange={searchChange}
            >
            </input>
        </div>
    );
}

export default SearchBox;