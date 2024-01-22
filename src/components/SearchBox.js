import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input 
                aria-label="search robots"
                className="pa3 ba b--green bg-lightest-blue" 
                type='search' 
                name="searchBox"
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;