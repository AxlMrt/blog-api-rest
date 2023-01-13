/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './register.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

export default function Register() {
  const username = React.useRef();
  const email = React.useRef();
  const password = React.useRef('');
  const [error, setError] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const baseURL = 'http://localhost:3000/api/v1';
      const res = await axios.post(`${baseURL}/auth/register`, { username, email, password });
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <section className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          ref={username}
          placeholder="Enter you username"
        />
        <label>Email</label>
        <input type="email" className="registerInput" ref={email} placeholder="Enter you email" />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          ref={password}
          placeholder="Enter you password"
        />
        <button type="submit" className="registerBtn">
          register
        </button>
      </form>
      <button type="button" className="registerLoginBtn">
        <NavLink to="/login">Login</NavLink>
      </button>
      {error && <span>Something went wrong !</span>}
    </section>
  );
}
