import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import { useContext } from 'react';
import { ProductContext } from "../contexts/ProductContext";

const Details = () => {

  const { details } = useContext(ProductContext);

  console.log(details);

  return (
    < div >
      <h3></h3>
    </div >
  );
}

export default Details;