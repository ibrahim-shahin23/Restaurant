import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import joi from 'joi-browser';
const Login = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
    errors: {},
  });

  const schema = {
    username: joi.string().required(),
    password: joi.string().required(),
  };

  const handleChange = (e) => {
    //1.clone
    let newState = { ...state };
    //2.edit
    newState[e.currentTarget.name] = e.currentTarget.value;
    //3.setState
    setState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors) return;
    //call backend
    console.log('submit');
  };

  const validate = () => {
    const errors = {};
    const newState = { ...state };
    delete newState.errors;
    const result = joi.validate(newState, schema, { abortEarly: false });
    if (result.error === null) {
      setState({ errors: {} });
      return null;
    }
    for (const error of result.error.details) {
      errors[error.path] = error.message;
    }
    setState({ errors });
  };

  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User name
          </label>
          <input
            value={state.username}
            onChange={handleChange}
            type="text"
            name="username"
            className="form-control"
            id="username"
          />
        </div>
        {state.errors.username && (
          <div className="alert alert-danger">{state.errors.username}</div>
        )}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            value={state.password}
            onChange={handleChange}
            type="password"
            name="password"
            className="form-control"
            id="password"
          />
        </div>
        {state.errors.password && (
          <div className="alert alert-danger">{state.errors.password}</div>
        )}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Container>
  );
};

export default Login;
