import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from '../../assets/profil.jpg';
import { Context } from '../../context/Context';

export default function Nav() {
  const PF = `${import.meta.env.VITE_API_URL}/public/images/`;
  const { user, dispatch } = React.useContext(Context);
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <>
      <nav className="topCenter">
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
              {user && 'Write'}
            </NavLink>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && 'Logout'}
          </li>
        </ul>
      </nav>
      <div className="topRight">
        {user ? (
          <NavLink to="/settings" className="topRightLink">
            <img
              className="topImg"
              src={
                user.others.profilePic
                  ? PF + user.others.profilePic
                  : Profile
              }
              alt="Profile"
            />
            {/* <i className="topSearch fa-solid fa-magnifying-glass" /> */}
          </NavLink>
        ) : (
          <>
            <NavLink to="/login" className="topListItem">
              Login
            </NavLink>
            <NavLink to="/register" className="topListItem">
              Register
            </NavLink>
            {/* <i className="topSearch fa-solid fa-magnifying-glass" /> */}
          </>
        )}
      </div>
    </>
  );
}
