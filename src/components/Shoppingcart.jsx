import React, { useContext } from 'react';
import Product from './product';
import { ProductsContext } from '../context/ProductsContext';

const ShoppingCart = () => {
  const { state, resetHandler } = useContext(ProductsContext);
  
  return (
    <React.Fragment>
      <h1>ShoppingCart</h1>
      <button className="btn btn-secondary m-2" onClick={resetHandler}>
        reset
      </button>
      {state.products
        .filter((product) => product.isInCart)
        .map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </React.Fragment>
  );
};

export default ShoppingCart;
