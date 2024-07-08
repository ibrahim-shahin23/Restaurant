import React, { useContext } from 'react';
import Product from './product';
import { ProductsContext } from './App';

const ShoppingCart =(props)=> {

  const products = useContext(ProductsContext)
    return (
      <React.Fragment>
        <h1>ShoppingCart</h1>
        <button className="btn btn-secondary m-2" onClick={props.onReset}>
          reset
        </button>
        {products.filter((product)=>product.isInCart).map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={props.onDelete}
            onIncrement={props.onIncrement}
            onDecrement={props.onDecrement}
          />
        ))}
      </React.Fragment>
    );
  }

export default ShoppingCart;
