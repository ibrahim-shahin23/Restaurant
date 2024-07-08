import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import { ToastContainer } from 'react-toastify';
import { ProductsProvider } from '../context/ProductsContext';

const App = () => {

  return (
    <ProductsProvider>
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Navbar />
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="login" element={<Login />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="admin" element={<Admin />} />
            </Route>
            <Route path="admin" element={<Admin />} />
            <Route path="productform/:id" element={<ProductForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  );
};

export default App;
