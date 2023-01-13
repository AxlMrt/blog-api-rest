/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css';
import profile from '../../assets/profil.jpg';

export default function TopBar() {
  const { user } = React.useContext(Context);
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square" />
        <i className="topIcon fab fa-twitter-square" />
        <i className="topIcon fab fa-instagram-square" />
        <i className="topIcon fab fa-pinterest-square" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <NavLink to="/" className="topListItem">
              Home
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink to="/about" className="topListItem">
              About
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink to="/contact" className="topListItem">
              Contact
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink to="/write" className="topListItem">
              Write
            </NavLink>
          </li>
          <li className="topListItem">{user && 'Logout'}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
            <img className="topImg" src={profile} alt="Profile Picture" />
            <i className="topSearch fa-solid fa-magnifying-glass" />
          </>
        ) : (
          <>
            <NavLink to="/login" className="topListItem">
              Login
            </NavLink>
            <NavLink to="/register" className="topListItem">
              Register
            </NavLink>
            <i className="topSearch fa-solid fa-magnifying-glass" />
          </>
        )}
      </div>
    </div>
  );
}
