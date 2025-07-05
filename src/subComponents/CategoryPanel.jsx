import React, { useEffect } from 'react'
import SearchBar from './SearchBar';
import CategoryList from './CategoryList';

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
            <CategoryList />
        </div>
    </>
  )
}

export default SearchBarPanel