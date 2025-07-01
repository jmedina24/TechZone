import React, { useState, useEffect } from 'react'
import '../css/menuAccess.css';
import SearchBar from '../subComponents/SearchBar';
import { Link } from 'react-router-dom';
import SearchBarPanel from './SearchBarPanel';

const MenuAccess = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isOpen]);

  return (
    <div className='menu'>
      <div className='menu__container-open'>
        <button className={`menu__container ${isOpen ? 'close-menu' : ''}`}  onClick={toggleMenu}>
            {isOpen ? <i class="bi bi-x-lg"></i> : <span className='menu__logo'><i class="bi bi-list"></i></span>}
        </button>
          
        <nav className={`menu__container-links ${isOpen ? 'active' : ''}`}>
          <div className='menu__container-user-info'>
            <div className='menu__container-person'>
            <div className='menu__person-logo'>
              <i class="bi bi-person-circle"></i>
            </div>
            <div className='menu__container-person-text'>
            <div className='menu__container-title'>
              <div className='menu__title'><span>Bienvenido/a</span></div>
            </div>
            <div className='menu__container-description'>
              <p className='menu__description'>¡Inicia sesión en tu cuenta o crea una nueva!</p>
            </div>
            <div className='menu__container-btn'>
              <Link to='/login'><button type="button" class="btn btn-primary">Iniciar sesión</button></Link>
              <Link to='/signup'><button type="button" class="btn btn-light">Crear cuenta</button></Link>
            </div>
            </div>
            </div>
            
          </div>
              <Link to='/'><i class="bi bi-house-door"></i>Inicio</Link>
              <button className='search__btn' onClick={() => setShowSearch(true)}><i class="bi bi-search"></i>Buscar productos</button>
              <SearchBarPanel visible={showSearch} onClose={() => setShowSearch(false)}/>
              <Link to='/favourites'><i class="bi bi-heart"></i>Favoritos</Link>
              <Link to='/categories'><i class="bi bi-list-ul"></i>Categorías</Link>
              <Link to='/offers'><i class="bi bi-tag"></i>Ofertas</Link>
              <Link to='/bestsellers'><i class="bi bi-star"></i>Más vendidos</Link>
              <Link to='/help'><i class="bi bi-info-circle"></i>Ayuda</Link>
        </nav>
        </div>
        {isOpen && <div className="header__overlay" onClick={closeMenu} />}
    </div>
  )
}

export default MenuAccess