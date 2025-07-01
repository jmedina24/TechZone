import React, { useState } from 'react'
import '../css/cartAccess.css'
import { Link, useNavigate } from 'react-router'
import Cart from '../pages/Cart'
import EmptyCart from '../pages/EmptyCart'

const CartAccess = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  const goToCart = () => {
    if (cart.length > 0){
      navigate('/cart')
    }else{
      navigate('/emptycart')
    }
  };
  
  return (
    <div className='cart'>
        <button className='cart__btn' onClick={goToCart}>
            <i className="bi bi-cart"></i>
        </button>
            
            
            
        
    </div>
  )
}

export default CartAccess