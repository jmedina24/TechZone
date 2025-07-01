import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header2';
import '../css/emptyCart.css';

const EmptyCart = () => {
  return (
    <>
    <Header />
    <DotLottieReact
      className='empty__animation'
      src="https://lottie.host/d04235ae-9ea1-46e6-9217-2cbb4e16dad6/TogzzEl8nA.lottie"
      loop
      autoplay
    />

    <div className='empty__text-container'>
        <p className='empty__text'>Aún no has agregado artículos al carrito de compras...</p>

        <p className='empty__text'>Haz <Link to='/'>click aquí</Link> para acceder al listado de productos disponibles.</p>
    </div>
    </>
  )
}

export default EmptyCart




