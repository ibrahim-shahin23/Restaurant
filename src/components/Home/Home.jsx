import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';
import Cart from '../Cart';
const Home = (props) => {
  return (
    <Container>
      <h1>Home Page</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => {
            return (
              <tr>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <Cart product={product} onClick={props.handleCart}/>
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
