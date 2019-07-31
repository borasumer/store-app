import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../contexts/ProductContext';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

const Model = () => {
  const { closeModel, model } = useContext(ProductContext);
  const { modelOpen, modelProduct } = model;
  const { img, title, price } = modelProduct;

  //console.log(model)
  return !modelOpen ? (
    null
  ) : (
      <ModelContainer>
        <div className="container">
          <div className="row">
            <div id="model" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
              <h5>Item has added to the cart</h5>
              <img className="img-fluid" src={img} alt="Model" />
              <h5>{title}</h5>
              <h5 className="text-muted">price: $ {price}</h5>
              <Link to="/">
                <ButtonContainer onClick={() => closeModel()}>
                  store
                </ButtonContainer>
              </Link>
              <Link to="/cart">
                <ButtonContainer cart onClick={() => closeModel()}>
                  go to cart
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </ModelContainer>
    );
}

export default Model;

const ModelContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#model{
  background:var(--mainWhite);
}

`
