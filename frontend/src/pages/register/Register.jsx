import './register.css';
import { NavLink, useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

export default function Register() {
  const usernameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const baseURL = `${import.meta.env.VITE_API_URL}/api/v1`;
      const res = await axios.post(`${baseURL}/auth/register`, {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      });
      res.data && navigate('/login');
    } catch (err) {
      console.log(err);
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
          ref={usernameRef}
          placeholder="Enter you username"
        />
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          ref={emailRef}
          placeholder="Enter you email"
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          ref={passwordRef}
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
