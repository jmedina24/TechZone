import React from 'react'
import logo from '../images/logo-desktop.png';
import SearchBar from '../subComponents/SearchBar';
import NavbarLinks from '../subComponents/NavbarLinks';
import CartAccess from '../subComponents/CartAccess';
import MenuAccess from '../subComponents/MenuAccess';
import CloseMenuAccess from '../subComponents/CloseMenuAccess';
import ProfileMenuLinks from '../subComponents/ProfileMenuLinks';
import PersonalInformationAccess from '../subComponents/PersonalInformationAccess';
import '../css/header2.css';

const Header2 = () => {
  return (
    <div className='header'>
        <div className='header__container-left'>
            <div className='header__container-logo'>
                <a className='header__btn-logo' href='#'><img className='header__logo' src={logo} alt='Logo'></img></a>
            </div>
            <div className='header__container-location'>
                <div className='header__location-logo'>
                    <span><i className="bi bi-geo-alt"></i></span>
                    <div className='header__location'>
                        Montevideo, Uruguay
                    </div>
                </div>
            </div>
        </div>

        <div className='header__container-center'>
            <div className='header__container-searchbar'>
                <SearchBar />
            </div>

            <div className='header__container-links'>
                <NavbarLinks />
            </div>

        </div>

        <div className='header__container-right'>

        <div className='header__container-smaall-screen'>
                <div className='header__container-logo-cart'>
                    <CartAccess />
                </div>

                <div className='header__container-logo-menu'>
                    <MenuAccess />
                </div>

                <div className='header__container-logo-close'>
                    <CloseMenuAccess />
                </div>
            </div>
        </div>

        <div className='header__container-other-screens'>
            <div className='header__container-no-login'>
                <span>Para poder realizar compras en el sitio web, debes <a href='#'>Iniciar sesión.</a></span>
            </div>
            <div className='header__container-login'>
                <div className='header__container-login-personal-info'>
                    <PersonalInformationAccess />
                </div>
                <div className='header__container-login-options'>
                    <ProfileMenuLinks />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header2