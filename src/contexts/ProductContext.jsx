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

  useEffect(() => {
    setProducts(tempProducts);
  }, []);

  return (
    <ProductContext.Provider value={{ products, details }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;