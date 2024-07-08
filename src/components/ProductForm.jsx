import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductForm = () => {
  const [state, setState] = useState({ name: '', price: '' });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const editProduct = async () => {
      const id = params.id;
      if (id !== 'new') {
        const { data } = await axios.get(
          'http://localhost:3000/products/' + id
        );
        const newState = { ...state };
        newState.name = data.name;
        newState.price = data.price;
        setState(newState);
      }
    };
    editProduct();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.id === 'new') {
      const obj = { ...state, count: 0, isInCart: false };
      await axios.post('http://localhost:3000/products/', obj);
      toast.success('product added successfully');
    } else {
      console.log(state.id);
      const obj = { ...state, count: 0, isInCart: false };
      // delete obj.id
      await axios.put('http://localhost:3000/products/' + params.id, obj);
      toast.info('product edited successfully');
    }
    navigate('/admin');
  };
  const handleChange = (e) => {
    //1.clone
    let newState = { ...state };
    //2.edit
    newState[e.currentTarget.name] = e.currentTarget.value;
    //3.setState
    setState(newState);
  };

  return (
    <Container>
      <h1>Product form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="form-control"
            id="name"
            value={state.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            name="price"
            onChange={handleChange}
            className="form-control"
            id="price"
            value={state.price}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Apply
        </button>
      </form>
    </Container>
  );
};

export default ProductForm;
