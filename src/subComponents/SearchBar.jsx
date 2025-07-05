import React, { useState, useEffect, useRef } from 'react';
import '../css/searchBar.css';

const mockData = [
  'Celulares',
  'Laptops',
  'Procesadores',
  'Teclados',
  'Auriculares',
  'Smartwatches',
];

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const containerRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = mockData.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
  };

  const handleResultClick = (value) => {
    setSearch(value);
    setResults([]);
    console.log('Resultado seleccionado:', value);
  };

  // Cerrar lista al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="searchbar__wrapper" ref={containerRef}>
      <div className="searchbar__container">
        <i className="bi bi-search searchbar__icon-left"></i>

        <input
          type="text"
          className="searchbar__input"
          placeholder="¿Qué deseas buscar?"
          value={search}
          onChange={handleChange}
          autoComplete="off"
        />

        <button className="searchbar__icon-right" onClick={() => console.log('Buscar', search)}>
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>

      {results.length > 0 && (
        <div className="searchbar__results">
          <ul>
            {results.map((item, idx) => (
              <li key={idx} onClick={() => handleResultClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {search !== '' && results.length === 0 && (
        <div className="searchbar__results">
          <p className="searchbar__noresults">
            No se han obtenido resultados para la búsqueda.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
