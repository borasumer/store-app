import React, { createContext, useState, useEffect } from 'react';
import { storeProducts, detailProduct } from '../data';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState(storeProducts);
  const [details, setDetails] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState({
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  });

  useEffect(() => {
    addTotals();
  }, [details]);
  console.log(cart)
  const [model, setModel] = useState({
    modelProduct: detailProduct,
    modelOpen: false
  });

  let tempProducts = [];

  storeProducts.forEach(item => {
    const singleItem = { ...item };
    tempProducts = [...tempProducts, singleItem];
  });
  //! Add Totals
  const addTotals = () => {
    let subTotal = 0;
    cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setCartValue({
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total
    });
  }
  //! Increment Func for the Cart
  const increment = (id) => {
    console.log('this is increment method');
  }
  //! Decrement Func for the Cart
  const decrement = (id) => {
    console.log('this is decrement method');
  }
  //! Remove item from the cart
  const removeItem = (id) => {
    const tempCart = [...cart];
    const newCart = tempCart.filter(item => item.id !== id);
    setCart([newCart]);
    console.log('item removed')
  }
  //! Clear cart
  const clearCart = () => {
    console.log(' cart is cleared');
  }
  //! openModel Func
  const openModel = (id) => {
    const product = getItem(id);
    setModel({
      modelOpen: true,
      modelProduct: product
    });
  }
  //! closeModel Func
  const closeModel = () => {
    setModel({
      modelOpen: false,
      modelProduct: detailProduct
    })
  }
  //! addCart Func
  const addCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts(tempProducts);
    setCart([...cart, product]);
  }

  //! getItem Func - called in the handleDetails Func
  const getItem = (id) => {
    const product = products.find(item => item.id === id);
    return product;
  }
  //! handleDetails Func
  const handleDetails = (id) => {
    const product = getItem(id);
    setDetails(product);
    //console.log(product);
  }


  return (
    <ProductContext.Provider value={{ products, cart, details, addCart, handleDetails, model, openModel, closeModel, increment, decrement, removeItem, clearCart, cartValue, addTotals }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;