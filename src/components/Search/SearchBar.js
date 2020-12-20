import React from 'react';

const SearchBar = ({placeholder,handleChange}) => {
    return(
        <input type='search'
        className='search'
        placeholder={placeholder}
        onChange={handleChange}
        />
    )
}

export default SearchBar;