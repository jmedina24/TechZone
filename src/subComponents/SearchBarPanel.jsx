import React, { useEffect } from 'react'
import '../css/searchBarPanel.css';
import SearchBar from './SearchBar';

const SearchBarPanel = ({ visible, onClose }) => {
  useEffect(() => {
    // Bloqueo del scroll
    document.body.style.overflow = visible ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [visible]);

  if (!visible) return null;
    return (
    <>
        {/* Fondo oscuro */}
        <div className='overlay' onClick={onClose}></div>

        {/* Panel de buscador */}
        <div className='panel__search'>
            <button className='panel__search-btn' onClick={onClose}><i className="bi bi-arrow-left"></i></button>
            <SearchBar />
        </div>
    </>
  )
}

export default SearchBarPanel