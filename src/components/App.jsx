import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ShoppingCart from './Shoppingcart';
import Navbar from './navbar';
import RootLayout from './RootLayout';
import Home from './Home/Home';
import Dashboard from './Dashboard';
import Admin from './Admin';
import Users from './Users';
import DashboardLayout from '../layout/DashboardLayout';
import Post from './Post';

const App = () => {
  const [state, setState] = useState({
    products: [
      { id: 1, name: 'Burger', price: 65, count: 0, isInCart: false },
      { id: 2, name: 'Fries', price: 35, count: 0, isInCart: false },
      { id: 3, name: 'Cola', price: 15, count: 0, isInCart: false },
    ],
  });
  const handleCartChange = (product) => {
    const products = [...state.products];
    const index = products.indexOf(product);
    products[index] = {...products[index] };
    products[index].isInCart = !products[index].isInCart;
    setState({ products });
  };
  const resetHandler = () => {
    let products = [...state.products];
    products = products.map((p) => {
      p.count = 0;
      return p;
    });
    setState({ products });
  };
  const incrementHandler = (product) => {
    let products = [...state.products];
    let index = products.indexOf(product);
    products[index] = { ...state.products[index] };
    products[index].count++;
    setState({ products });
  };
  const decrementHandler = (product) => {
    let products = [...state.products];
    let index = products.indexOf(product);
    products[index] = { ...state.products[index] };
    if (products[index].count > 0) products[index].count--;
    setState({ products });
  };
  console.log(state);
 

  return (
    <BrowserRouter>
      <Navbar productCount={state.products.filter((p) => p.count > 0).length} />
      <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home handleCart={handleCartChange} products={state.products} />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="cart" element={<ShoppingCart products={state.products} onDelete={handleCartChange} onIncrement={incrementHandler} onDecrement={decrementHandler} onReset={resetHandler}/>} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
