/* eslint-disable jsx-a11y/label-has-associated-control */
import './register.css';
import { NavLink } from 'react-router-dom';

export default function Register() {
  return (
    <section className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Enter you username" />
        <label>Email</label>
        <input type="text" className="registerInput" placeholder="Enter you email" />
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter you password" />
        <button type="submit" className="registerBtn">
          register
        </button>
      </form>
      <button type="button" className="registerLoginBtn">
        <NavLink to="/login">Login</NavLink>
      </button>
    </section>
  );
}
