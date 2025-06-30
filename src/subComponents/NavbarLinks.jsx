import React from 'react'

const NavbarLinks = () => {
  return (
    <div className='navbar'>
        <div className='navbar__link-container'>
            <ul>
                <li className='navbar__link'><span className='navbar__link-span'><i class="bi bi-list-ul"></i></span> Categorías<span className='navbar__link-span'><i class="bi bi-arrow-down-short"></i></span></li>
                <li className='navbar__link'><span className='navbar__link-span'><i class="bi bi-tag"></i></span> Ofertas</li>
                <li className='navbar__link'><span className='navbar__link-span'><i class="bi bi-star"></i></span> Más vendidos</li>
                <li className='navbar__link'><span className='navbar__link-span'><i class="bi bi-info-circle"></i></span> Ayuda</li>
            </ul>
        </div>
    </div>
  )
}

export default NavbarLinks