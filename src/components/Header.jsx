import React from 'react'
import '../css/header.css';
import logoDesktop from '../images/logo-desktop.png'
import logoMobile from '../images/logo-mobile.png'
import SearchBar from '../subComponents/SearchBar';

const Header = () => {
  return (
    
    <div className='header'>
        <div className='header__container-logo'>
            <img className='header__logo-mobile' src={logoMobile} alt='Logo Mobile' />
            <img className='header__logo-desktop' src={logoDesktop} alt='Logo Desktop' />
        </div>
        <div className='header__container-search'>
            <SearchBar />
        </div>
        <div className='header__container-menu'>

        </div>
        <div className='header__container-cart'>
            <i class="bi bi-cart"></i>
        </div>
    </div>
    
  )
}

export default Header