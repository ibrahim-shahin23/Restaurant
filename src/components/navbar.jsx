import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

const Navbar = () => {
  const {state} = useContext(ProductsContext);
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <div className="" id="navbar-nav">
          <ul
            className="navbar-nav"
            style={{ display: 'flex', flexDirection: 'row', gap: '40px' }}
          >
            <li className="nav-item">
              <Link className="nav-link" to="/">
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
        <span className="badge badge-primary">{state.products.filter((product) => product.isInCart).length}</span>
      </div>
    </nav>
  );
};

export default Navbar;
