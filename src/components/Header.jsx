import React, { useState, useEffect } from 'react';
import '../css/header.css';
import logo from '../images/logo-desktop.png';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const handleSearch = (e) => setSearch(e.target.value);

  // Bloquear scroll al abrir el menú
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <header className="header">
        <div className="header__left-group">
          <a href='#' className="header__logo"><img className='header__logo-img' src={logo} alt='Logo'/></a>

          <div className="header__search-container">
            <input
              type="text"
              className="header__search-input"
              placeholder="Buscar..."
              value={search}
              onChange={handleSearch}
            />
            <span className="header__search-icon">🔍</span>
          </div>
        </div>

        <button className={`header__hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav-menu side ${isOpen ? 'active' : ''}`}>
          <a href="#" onClick={closeMenu}>Inicio</a>
          <a href="#" onClick={closeMenu}>Productos</a>
          <a href="#" onClick={closeMenu}>Nosotros</a>
          <a href="#" onClick={closeMenu}>Contacto</a>
        </nav>
      </header>

      {isOpen && <div className="header__overlay" onClick={closeMenu} />}
    </>
  );
};

export default HamburgerMenu;
