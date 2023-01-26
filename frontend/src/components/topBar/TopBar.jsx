import './topbar.css';
import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import Nav from './Nav';

export default function TopBar() {
  const [matches, setMatches] = React.useState(
    window.matchMedia('(max-width: 768px)').matches
  );

  React.useEffect(() => {
    window
      .matchMedia('(max-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square" />
        <i className="topIcon fab fa-twitter-square" />
        <i className="topIcon fab fa-instagram-square" />
        <i className="topIcon fab fa-pinterest-square" />
      </div>

      {matches && (
        <Menu right>
          <Nav />
        </Menu>
      )}

      {!matches && <Nav />}
    </div>
  );
}
