import React from 'react'
import '../css/cartAccess.css'
import { Link } from 'react-router'
import EmptyCart from './EmptyCart'

const CartAccess = () => {
  return (
    <div className='cart'>
        <div className='cart__container'>
            <a className='cart__btn' onClick={() => <EmptyCart />}><span className='cart__logo'><i class="bi bi-cart"></i></span></a>
            
        </div>
    </div>
  )
}

export default CartAccess