import React, { useState ,useContext} from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';
import Cart from '../Cart';
import { ProductsContext } from '../App';


const Home = (props) => {
  const products = useContext(ProductsContext)
  console.log(products);
  return (
    <Container>
      <h1>Home Page</h1>
      <table className="table">
        <thead>
          <tr>
            <th key="id" scope="col">#</th>
            <th key="name" scope="col">Item</th>
            <th key="price" scope="col">Price</th>
            <th key="add" scope="col">Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
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
