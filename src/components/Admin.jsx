import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

const Admin = () => {
  const {state,handleDelete} = useContext(ProductsContext)
  const navigate = useNavigate();
  const handlEdit = (product) => {
    navigate(`/productform/${product.id}`);
    console.log('edit');
  };
  const handlAdd = () => {
    navigate('/productform/new');
  };
  return (
    <Container>
      <h1>Admin</h1>
      <button type="submit" onClick={handlAdd} className="btn btn-primary">
        Add product
      </button>
      <table className="table">
        <thead>
          <tr>
            <th  scope="col">
              #
            </th>
            <th key="name" scope="col">
              Item
            </th>
            <th key="price" scope="col">
              Price
            </th>
            <th key="edit" scope="col">
              Edit
            </th>
            <th key="delete" scope="col">
              delete
            </th>
          </tr>
        </thead>
        <tbody>
          {state.products.map((product) => {
            return (
              <tr key = {product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <i
                    onClick={() => handlEdit(product)}
                    className="bi bi-pencil-square"
                  ></i>
                </td>
                <td>
                  <i
                    className="bi bi-trash-fill"
                    onClick={() => handleDelete(product)}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default Admin;
