import React, {createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
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
import Login from './Login';
import ProductForm from './ProductForm';
import { ToastContainer, toast } from 'react-toastify';

export const ProductsContext = createContext(null)

const App = () => {
  const [state, setState] = useState({
    products: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:3000/products');
      setState({ products: data });
    };
    fetchData();
  }, []);

  const handleCartChange = (product) => {
    const products = [...state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].isInCart = !products[index].isInCart;
    setState({ products });
  };
  const handleDelete = async (product) => {
    const oldProducts = [...state.products];
    setState((prevState) => ({
      products: prevState.products.filter((p) => p.id !== product.id),
    }));
    try {
      await axios.delete('http://localhost:3000/products/' + product.id);
      toast.warning("product deleted successfully")
    } catch {
      toast.error("deleting failed")
      setState({products:oldProducts})
    }
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

  return (
    <ProductsContext.Provider value={state.products}>
    <BrowserRouter>
    <ToastContainer position='top-center'/>
      <Navbar
        productCount={
          state.products.filter((product) => product.count > 0).length
        }
      />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route
            path="/"
            element={
              <Home handleCart={handleCartChange} />
            }
          />
          <Route path="/post" element={<Post />} />
          <Route
            path="cart"
            element={
              <ShoppingCart
                onDelete={handleCartChange}
                onIncrement={incrementHandler}
                onDecrement={decrementHandler}
                onReset={resetHandler}
              />
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route
            path="admin"
            element={
              <Admin onDelete={handleDelete} />
            }
          />
          <Route path="productform/:id" element={<ProductForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ProductsContext.Provider>
  );
};

export default App;
