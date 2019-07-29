import React from 'react';
import { useContext } from 'react';
import Title from './Title';
import { ProductContext } from "../contexts/ProductContext";
import Product from './Product';
//import styled from "styled-components";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  return (
    <React.Fragment>
      <div className="container">
        <Title name="our" title="products" />
        <div className="row">
          {products.map(product => {
            return (
              <Product product={product} key={product.id} />
            )
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductList;

//const ProductWrapper = styled.section``;