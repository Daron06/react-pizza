import React from 'react';

import './Cart.scss';
import cartSvg from '../../../assets/img/cart.svg';

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-elem">
        <p>520 &#8381;</p>
      </div>
      <div className="cart-elem">
        <p>
          <i>
            <img src={cartSvg} alt="корзина покупок"></img>
          </i>
          3
        </p>
      </div>
    </div>
  );
};

export default Cart;
