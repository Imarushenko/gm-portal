import { NavLink, Link } from 'react-router-dom';

function Navbar({ onJoinNow }) {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <div className="logo-mark">G</div>
        <div className="logo-text">
          <span className="logo-title">GM Portal</span>
          <span className="logo-sub">access gateway</span>
        </div>
      </Link>

      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          About
        </NavLink>
        <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          FAQ
        </NavLink>
        <NavLink to="/terms" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Terms
        </NavLink>
      </nav>

      <button className="nav-cta" onClick={onJoinNow}>
        Join now
      </button>
    </header>
  );
}

export default Navbar;