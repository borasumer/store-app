import React, { createContext, useState, useEffect } from 'react';
import { storeProducts, detailProduct } from '../data';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState(storeProducts);
  const [detail, setDetail] = useState(detailProduct);

  let tempProducts = [];

  storeProducts.map(item => {
    const singleItem = { ...item };
    tempProducts = [...tempProducts, singleItem];
    return console.log('items are set')
  });

  useEffect(() => {
    setProducts(tempProducts);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;