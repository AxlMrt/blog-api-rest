import './sidebar.css';
import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import profilePic from '../../assets/sideprofil.jpg';

export default function Sidebar() {
  const baseURL = `${import.meta.env.VITE_API_URL}/api/v1`;
  const [cats, setCats] = React.useState([]);

  React.useEffect(() => {
    const getCat = async () => {
      const res = await axios.get(`${baseURL}/categories`);
      setCats(res.data);
    };

    getCat();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <img src={profilePic} alt="Profile" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex sed
          laudantium suscipit possimus pariatur architecto repellendus qui
          voluptatem expedita in esse.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {
            cats.map((cat, idx) => (
            <NavLink key={idx} to={`/?cat=${cat.name}`} className="link">
              <li className="sidebarListItem">{cat.name}</li>
            </NavLink>
            ))
          }
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square" />
          <i className="sidebarIcon fab fa-twitter-square" />
          <i className="sidebarIcon fab fa-instagram-square" />
          <i className="sidebarIcon fab fa-pinterest-square" />
        </div>
      </div>
    </div>
  );
}
