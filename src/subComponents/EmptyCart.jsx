import React from 'react'
import emptyCartImage from '../images/emptyCart.png';
import emptyCart from '../css/emptyCart.css';

const EmptyCart = () => {
  return (
    <div className='emptyCart'>
        <div className='emptyCart__container'>
            <div className='emptyCart__container-image'>
                <img className='emptyCart__image' src={emptyCartImage} alt='Carrito vacío...'/>
            </div>
            <div className='emptyCart__container-text'>
                <p className='emptyCart__text'>No ha agregado artículos a su carrito de compras...</p>
                <p className='emptyCart__text'>Haga <span className='emptyCart__text-span'><a className='emptyCart__link'>click aquí</a></span> para explorar los productos disponibles en nuestro sitio web.</p>
            </div>
        </div>
    </div>
  )
}

export default EmptyCart