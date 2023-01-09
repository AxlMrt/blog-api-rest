/* eslint-disable jsx-a11y/img-redundant-alt */
import './header.css';
import headerPic from '../../assets/header.webp';

export default function Header() {
  return (
    <header>
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={headerPic} alt="header picture" />
    </header>
  );
}
