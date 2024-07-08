import React, { useState ,useContext} from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';
import Cart from '../Cart';
import { ProductsContext } from '../../context/ProductsContext';


const Home = () => {
  const {state,handleCartChange} = useContext(ProductsContext)
  return (
    <Container>
      <h1>Home Page</h1>
      <table className="table">
        <thead>
          <tr key="head">
            <th key="id" scope="col">#</th>
            <th key="name" scope="col">Item</th>
            <th key="price" scope="col">Price</th>
            <th key="add" scope="col">Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {state.products.map((product) => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <Cart product={product} onClick={handleCartChange}/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default Home;
