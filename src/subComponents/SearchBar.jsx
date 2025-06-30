import React from 'react'
import '../css/searchBar.css';

const SearchBar = () => {
  return (
    <div className='searchbar__container'>
      <span className='searchbar__icon'><i class="bi bi-search"></i></span>
        <input 
          type='text' 
          className='searchbar__input' 
          placeholder='¿Qué desea buscar?'
          //value={search}
          //onChange={handleSearch}
        />
        
    </div>
  )
}

export default SearchBar