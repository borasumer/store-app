import React, { createContext, useState, useEffect } from 'react';
import { detailProduct } from '../data';
import axios from 'axios';



export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState({
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  });
  //console.log('First', storeProducts);

  useEffect(() => {
    // axios.post('http://localhost:5000/products/add/', storeProducts)
    //   .then(console.log('products are added to the database'))
    //   .catch(err => console.log(err));
    axios.get('https://phonestore-app.herokuapp.com/products/')
      .then(response => {
        response ? (setProducts(response.data)) : (console.log('there is no response'));
      })
      .catch(err => console.log(err));
  }, []);


  useEffect(() => {
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
    addTotals();
  }, [cart]);

  const [model, setModel] = useState({
    modelProduct: detailProduct,
    modelOpen: false
  });


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
  const increment = (_id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => item._id === _id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;
    setCart(tempCart);
  }
  //! Decrement Func for the Cart
  const decrement = (_id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => item._id === _id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      removeItem(_id);
    } else {
      product.total = product.count * product.price;
      setCart(tempCart);
    }

  }
  //! Remove item from the cart
  const removeItem = (_id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];
    tempCart = tempCart.filter(item => item._id !== _id);

    const index = tempProducts.indexOf(getItem(_id));
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
  const openModel = (_id) => {
    const product = getItem(_id);
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
  const addCart = (_id) => {
    console.log('first', products)
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(_id));
    const tempPro = tempProducts[index];
    tempPro.inCart = true;
    tempPro.count = 1;
    const price = tempPro.price;
    tempPro.total = price;
    setCart([...cart, tempPro]);
  }
  const resStore = () => {
    let tempProducts = [...products];
    tempProducts.forEach(item => item.inCart = false)
    setProducts(tempProducts);
  }


  //! getItem Func - called in the handleDetails Func
  const getItem = (_id) => {
    const product = products.find(item => item._id === _id);
    return product;
  }
  //! handleDetails Func
  const handleDetails = (_id) => {
    const product = getItem(_id);
    setDetails(product);
  }

  return (
    <ProductContext.Provider value={{ resStore, products, cart, details, addCart, handleDetails, model, openModel, closeModel, increment, decrement, removeItem, clearCart, cartValue, addTotals }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;