import React from 'react';

const Cart = (props) => {
  const style = !props.product.isInCart
    ? { fontSize:"25px",
        color: '#bbb',
        cursor: "pointer",
      }
    : {  fontSize:"25px",cursor: "pointer" };

  return <i style={style} onClick={()=>props.onClick(props.product)} className="bi bi-cart-plus-fill"></i>;
};

export default Cart;
