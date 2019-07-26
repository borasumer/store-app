import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ProductContext from '../contexts/ProductContext';

const Product = ({ product }) => {
  const { id, title, img, price, inCart } = useContext(ProductContext);
  return (
    <React.Fragment>

    </React.Fragment>
  );
}

export default Product;