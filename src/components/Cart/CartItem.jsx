import React, { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext';



const CartItem = ({ item }) => {
  const { increment, decrement, removeItem } = useContext(ProductContext);
  const { id, title, img, price, total, count } = item;
  console.log(increment)
  return (
    <div>
      cart item
    </div>
  );
}

export default CartItem;