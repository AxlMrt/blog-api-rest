/* eslint-disable jsx-a11y/label-has-associated-control */
import './login.css';
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <section className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Enter you email" />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter you password" />
        <button type="submit" className="loginBtn">
          Login
        </button>
      </form>
      <button type="button" className="loginRegisterBtn">
        <NavLink to="/register">Register</NavLink>
      </button>
    </section>
  );
}
