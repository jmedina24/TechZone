import React, { useState, useEffect } from 'react'
import '../css/menuAccess.css';
import SearchBar from '../subComponents/SearchBar';
import { Link } from 'react-router-dom';
import SearchBarPanel from './SearchBarPanel';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const MenuAccess = () => {

  // Loging and SignUp
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = (email, password) => {
    console.log('Login with: ', email, password);
    setShowLogin(false);
  }

  const handleRegister = (data) => {
    console.log('Register with: ', data);
    setShowRegister(false);
  };

  // Menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Search
  const [showSearch, setShowSearch] = useState(false);

  // Scroll lock
    useEffect(() => {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isOpen]);

      // Abrir Login desde evento personalizado
  useEffect(() => {
    const handleOpenLogin = () => {
      setShowRegister(false);
      setShowLogin(true);
    };

    window.addEventListener('openLogin', handleOpenLogin);
    return () => {
      window.removeEventListener('openLogin', handleOpenLogin);
    };
  }, []);


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
              <button className="btn btn-primary w-100 mb-2" onClick={() => setShowLogin(true)}>Iniciar sesión</button>
              <button className='btn btn-outline-primary w-100 mb-2' onClick={() => setShowRegister(true)}>Crear cuenta</button>
              
              {showLogin && (
                <Login 
                  show={showLogin} 
                  handleClose={() => setShowLogin(false)} 
                  handleLogin={handleLogin} 
                  openRegister={() => {
                    setShowLogin(false); 
                    setShowRegister(true);
                  }} 
              />
              )}

              {showRegister && (
              <SignUp 
                show={showRegister}
                handleClose={() => setShowRegister(false)}
                handleRegister={handleRegister} 
              />
              )}
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