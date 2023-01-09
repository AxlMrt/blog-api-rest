/* eslint-disable jsx-a11y/img-redundant-alt */
import './sidebar.css';
import profilePic from '../../assets/profil.jpg';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <img src={profilePic} alt="Profile Picture" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex sed laudantium suscipit
          possimus pariatur architecto repellendus qui voluptatem expedita in esse.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
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
