import React, { createContext, useState, useEffect } from 'react';
import { storeProducts, detailProduct } from '../data';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState(storeProducts);
  const [details, setDetails] = useState(detailProduct);
  const [cart, setCart] = useState(

    {
      cartItems: storeProducts,
      cartSubtotal: 0,
      cartTax: 0,
      cartTotal: 0
    });
  const [model, setModel] = useState({
    modelProduct: detailProduct,
    modelOpen: false
  });

  let tempProducts = [];

  storeProducts.forEach(item => {
    const singleItem = { ...item };
    tempProducts = [...tempProducts, singleItem];
  });
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
    console.log('item removed');
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
    setCart({ ...cart.cartItems, product });
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
  useEffect(() => {
    setProducts(tempProducts);
  }, []);

  return (
    <ProductContext.Provider value={{ products, cart, details, addCart, handleDetails, model, openModel, closeModel, increment, decrement, removeItem, clearCart }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;