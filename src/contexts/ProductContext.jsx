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
  //console.log('First', storeProducts);
  useEffect(() => {
    const addTotals = () => {
      //console.log(cart);
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
    addTotals();
  }, [details.total, cart]);
  //console.log(details.tax)
  // useEffect(() => {
  //   setStore();
  // }, [])
  const [model, setModel] = useState({
    modelProduct: detailProduct,
    modelOpen: false
  });

  // const setStore = () => {
  //   let tempProducts = [];
  //   storeProducts.forEach(item => {
  //     const singleItem = { ...item };
  //     tempProducts = [...tempProducts, singleItem];
  //   });
  //   setProducts(tempProducts);
  //   console.log('set')
  // }

  //! Add Totals
  const addTotals = () => {
    //console.log(cart);
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
    let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;
    setCart(tempCart);
  }
  //! Decrement Func for the Cart
  const decrement = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setCart(tempCart);
    }

  }
  //! Remove item from the cart
  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];
    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    //console.log(removedProduct);
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    setCart([...tempCart]);
    setProducts([...tempProducts]);
  }
  //! Clear cart
  const clearCart = () => {
    setCart([]);
    setCartValue({
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0
    });
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
    console.log('first', storeProducts)
    let tempProducts = [...storeProducts];
    const index = tempProducts.indexOf(getItem(id));
    const tempPro = tempProducts[index];
    tempPro.inCart = true;
    tempPro.count = 1;
    const price = tempPro.price;
    tempPro.total = price;
    //setProducts(tempProducts);
    setCart([...cart, tempPro]);
  }
  const resStore = () => {
    let tempProducts = [...storeProducts];
    tempProducts.forEach(item => item.inCart = false)
    //setProducts(tempProducts);
    setProducts(tempProducts);
    //console.log('Second', tempProducts);
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

  //console.log('hi')
  return (
    <ProductContext.Provider value={{ resStore, products, cart, details, addCart, handleDetails, model, openModel, closeModel, increment, decrement, removeItem, clearCart, cartValue, addTotals }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;