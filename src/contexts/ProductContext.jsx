import React, { createContext, useState, useEffect } from 'react';
import { storeProducts, detailProduct } from '../data';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState(storeProducts);
  const [details, setDetails] = useState(detailProduct);

  let tempProducts = [];

  storeProducts.forEach(item => {
    const singleItem = { ...item };
    tempProducts = [...tempProducts, singleItem];
    //console.log('rendered')
  });
  //! addCart Func
  const addCart = (id) => {
    console.log(id)
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
    <ProductContext.Provider value={{ products, details, addCart, handleDetails }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;