import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import { useContext } from 'react';
import { ProductContext } from "../contexts/ProductContext";

const Details = () => {

  const { details, addCart, openModel } = useContext(ProductContext);
  //const { modelOpen } = model;

  const { id, company, img, info, price, title, inCart } = details;


  return (
    <div className="container py-5">
      {/*Title Row Starts*/}
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>
      {/*Title Row Ends*/}
      {/*Product Info Row Starts*/}
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          {/*Image Col*/}
          <img src={img} className="img-fluid" alt="product detail img" />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          {/*Info Col*/}
          <h2>model: {title}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by : <span className="text-uppercase">
              {company}
            </span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price : <span>$</span>
              {price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about the product:
          </p>
          <p className="text-muted lead">
            {info}
          </p>
          <div className="row">
            <div className="ml-2 mr-2">
              <Link to="/">
                <ButtonContainer>
                  back to products
              </ButtonContainer>
              </Link>
            </div>
            <div className="ml-2">
              <ButtonContainer cart onClick={() => {
                addCart(id)
                openModel(id)
                //addTotals()
                //console.log(modelOpen)
              }} disabled={inCart ? true : false}>
                {inCart ? 'inCart' : 'add to cart'}
              </ButtonContainer>
            </div>
          </div>
        </div>
      </div>
      {/*Product Info Row Ends*/}



    </div>
  );
}

export default Details;