import React, { useState, useEffect } from 'react';
import '../css/menuAccess.css';
import SearchBarPanel from '../subComponents/SearchBarPanel';
import CategoryPanel from '../subComponents/CategoryPanel';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import UserWithoutLogin from '../subComponents/UserWithoutLogin';
import PersonalInformationAccess from '../subComponents/PersonalInformationAccess';

const MenuAccess = () => {
  // Menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Search & Category
  const [showSearch, setShowSearch] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  // Login/Register
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = (email, password) => {
    console.log('Login with:', email, password);
    setShowLogin(false);
  };

  const handleRegister = (data) => {
    console.log('Register with:', data);
    setShowRegister(false);
  };

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Evento personalizado para abrir login
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

  const [ user, setUser ] = useState({
    firstName: 'Jonatan',
    lastName: 'Medina',
    photo: 'https://w7.pngwing.com/pngs/1008/377/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-black-hair-computer.png',
  });

  const handleLogout = () => {
    console.log('Sesión Cerrada');
    setUser(null);
  }

  return (
    <div className='menu'>
      <div className='menu__container-open'>
        <button className={`menu__container ${isOpen ? 'close-menu' : ''}`} onClick={toggleMenu}>
          {isOpen ? <i className="bi bi-x-lg"></i> : <span className='menu__logo'><i className="bi bi-list"></i></span>}
        </button>
      
        <nav className={`menu__container-links ${isOpen ? 'active' : ''}`}>
          <div className='user'>
            {user ? (
              <PersonalInformationAccess user={user} onLogout={handleLogout}/>
            ): (
              <UserWithoutLogin />
            )}
          </div>
          <Link to='/'><i className="bi bi-house-door"></i>Inicio</Link>
          <button className='search__btn' onClick={() => setShowSearch(true)}><i className="bi bi-search"></i>Buscar productos</button>
          <SearchBarPanel visible={showSearch} onClose={() => setShowSearch(false)} />

          <Link to='/favourites'><i className="bi bi-heart"></i>Favoritos</Link>
          <button className='search__btn' onClick={() => setShowCategory(true)}><i className="bi bi-list-ul"></i>Categorías</button>
          <CategoryPanel visible={showCategory} onClose={() => setShowCategory(false)} />

          <Link to='/offers'><i className="bi bi-tag"></i>Ofertas</Link>
          <Link to='/bestsellers'><i className="bi bi-star"></i>Más vendidos</Link>
          <Link to='/help'><i className="bi bi-info-circle"></i>Ayuda</Link>
        </nav>
      </div>

      {isOpen && <div className="header__overlay" onClick={closeMenu} />}

      {/* Modales Login y SignUp */}
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
  );
};

export default MenuAccess;
