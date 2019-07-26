import React from 'react';
import { useContext } from 'react';
import Title from './Title';
import { ProductContext } from "../contexts/ProductContext";
import Product from './Product';


const ProductList = () => {
  const { products } = useContext(ProductContext);
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <div className="row">
            {products.map(product => {
              return (
                <React.Fragment>
                  <Title name={product.name} title={product.title} />
                  <Product product={product} key={product.id} />
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductList;