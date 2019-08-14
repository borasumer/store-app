import React, { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext';



const CartItem = ({ item }) => {
  const { increment, decrement, removeItem, addTotals } = useContext(ProductContext);
  const { _id, title, img, price, total, count } = item;
  //console.log(increment)
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} style={{ width: '5rem', height: '5rem' }} className="img-fluid" alt="product" />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">
          product :
        </span>{title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">
          price : $
        </span>{price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => {
              decrement(_id)
              addTotals()
            }}>-</span>
            <span className="btn btn-black mx-1" >{count}</span>
            <span className="btn btn-black mx-1" onClick={() => {
              increment(_id)
              addTotals()
            }}>+</span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => {
          removeItem(_id)
          addTotals()
        }}>
          <i className="fas fa-trash" ></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total : $ {total}</strong>
      </div>

    </div>
  );
}

export default CartItem;