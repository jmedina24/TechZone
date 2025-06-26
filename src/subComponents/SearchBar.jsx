import React from 'react'
import '../css/searchBar.css';

const SearchBar = () => {
  return (
    <div className='searchBarContainer'>
        <input className='searchBar' type='search' placeholder='¿Qué desea buscar?'></input>
    </div>
  )
}

export default SearchBar