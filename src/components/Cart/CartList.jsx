import React from 'react'
import CartItem from './CartItem';


const CartList = ({ cart }) => {

  const { cartItems } = cart;
  return (
    <div className="container-fluid">
      {cartItems.map(item => {
        return (
          <CartItem key={item.id} item={item} />
        )
      })}


    </div>);
}

export default CartList;