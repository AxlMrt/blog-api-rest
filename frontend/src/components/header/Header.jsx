import './header.css';
import headerPic from '../../assets/header.webp';

export default function Header() {
  return (
    <header>
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={headerPic} alt="header" />
    </header>
  );
}
