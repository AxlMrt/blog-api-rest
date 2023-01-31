import './topbar.css';
import { useContext, useRef, useState, useEffect } from 'react';
import { elastic as Menu } from 'react-burger-menu';
import Nav from './Nav';
import { Context } from '../../context/Context';

export default function TopBar() {
  const ctx = useContext(Context);
  const burgRef = useRef();
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );

  useEffect(() => {
    const closeMenu = (e) => {
      if (!burgRef.current.contains(e.target)) {
        ctx.closeMenu();
      }
    };

    window
      .matchMedia('(max-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches));

    matches && document.body.addEventListener('mousedown', closeMenu);
    return () => document.body.removeEventListener('mousedown', closeMenu);
  }, [ctx, matches]);

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square" />
        <i className="topIcon fab fa-twitter-square" />
        <i className="topIcon fab fa-instagram-square" />
        <i className="topIcon fab fa-pinterest-square" />
      </div>

      {matches && (
        <div ref={burgRef}>
          <Menu
            right
            isOpen={ctx.isMenuOpen}
            onStateChange={(state) => ctx.stateChangeHandler(state)}>
            <Nav />
          </Menu>
        </div>
      )}

      {!matches && <Nav />}
    </div>
  );
}
