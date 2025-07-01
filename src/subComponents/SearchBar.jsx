import React from 'react'
import '../css/searchBar.css';

const SearchBar = () => {
  return (
    <div className='searchbar__container'>
        <input 
          type='text' 
          className='searchbar__input' 
          placeholder='¿Qué deseas buscar?'
          //value={search}
          //onChange={handleSearch}
        />
        
    </div>
  )
}

export default SearchBar