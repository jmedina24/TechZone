import React from 'react'

const ProfileMenuLinks = () => {
  return (
    <div className='profileMenu'>
        <div className='profileMenu__container'>
            <ul>
                <a href="#"><li><span><i class="bi bi-bag"></i> Mis Compras</span></li></a>
                <a href="#"><li><span><i class="bi bi-clock"></i> Historial</span></li></a>
                <a href="#"><li><span><i class="bi bi-heart"></i> Favoritos</span></li></a>
                <a href="#"><li><span><i class="bi bi-cart"></i> Carrito</span></li></a>
            </ul>
        </div>
    </div>
  )
}

export default ProfileMenuLinks