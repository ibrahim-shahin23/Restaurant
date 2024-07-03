import React from 'react';
import Product from './product';

const ShoppingCart =(props)=> {
  // const handleDelete = (product) => {
  //   const Products = state.Products.filter((p) => p.id !== product.id);
  //   setState({ Products });
  // };

    return (
      <React.Fragment>
        <h1>ShoppingCart</h1>
        <button className="btn btn-secondary m-2" onClick={props.onReset}>
          reset
        </button>
        {props.products.filter((product)=>product.isInCart).map((product) => (
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
