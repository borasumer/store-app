import React, { useContext } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns.jsx';
import EmptyCart from './EmptyCart';
import { ProductContext } from "../../contexts/ProductContext";
import CartList from './CartList';


const Cart = () => {

  const { cart } = useContext(ProductContext);
  return cart.length ? (
    <React.Fragment>
      <Title name="Your" title="Cart" />
      <CartColumns />
      <CartList cart={cart} />
    </React.Fragment>

  ) : (
      <EmptyCart />
    )
}

export default Cart;
