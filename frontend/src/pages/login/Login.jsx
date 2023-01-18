/* eslint-disable jsx-a11y/label-has-associated-control */
import './login.css';
import { useContext, useRef } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const baseURL = 'http://localhost:3000/api/v1';
      const res = await axios.post(`${baseURL}/auth/login`, {
        username: userRef.current.value,
        password: passwordRef.current.value
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <section className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          ref={userRef}
          placeholder="Enter you username"
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          ref={passwordRef}
          placeholder="Enter you password"
        />
        <button type="submit" className="loginBtn" disabled={isFetching}>
          Login
        </button>
      </form>
      <button type="button" className="loginRegisterBtn">
        <NavLink to="/register">Register</NavLink>
      </button>
    </section>
  );
}
