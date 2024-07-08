import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ProductsContext = createContext({});

const ProductsProvider = ({children}) => {
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
      toast.warning('product deleted successfully');
    } catch {
      toast.error('deleting failed');
      setState({ products: oldProducts });
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
    <ProductsContext.Provider
      value={{
        state,
        handleCartChange,
        decrementHandler,
        incrementHandler,
        resetHandler,
        handleDelete,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
