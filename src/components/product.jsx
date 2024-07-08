import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import { ProductsContext } from '../context/ProductsContext';

const Product = (props) => {
  const {
    decrementHandler,
    incrementHandler,
    handleCartChange,
  } = useContext(ProductsContext);

  const getCountBadge = () => {
    let countBadge;
    if (props.product.count <= 3) {
      if (props.product.count === 0) {
        countBadge = 'danger';
      } else countBadge = 'warning';
    } else countBadge = 'success';
    return countBadge;
  };

  return (
    <div className="row">
      <div className="col-2">
        <span style={{ color: 'red' }}>{props.product.name}</span>
      </div>
      <div className="col">
        <Badge bg={getCountBadge()}>{props.product.count}</Badge>
        <button
          onClick={() => incrementHandler(props.product)}
          className="btn btn-success btn-sm"
        >
          +
        </button>
        <button
          onClick={() => decrementHandler(props.product)}
          className="btn btn-danger btn-sm"
        >
          -
        </button>
        <span>
          <FontAwesomeIcon
            icon={faTrash}
            size="lg"
            className="m-2"
            onClick={() => handleCartChange(props.product)}
          />
        </span>
      </div>
    </div>
  );
};

export default Product;
