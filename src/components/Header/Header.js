import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header({ isLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="navbar__brand">
          <Link to="/">My React App</Link>
        </h1>
        <div className="navbar__links">
          <Link to="/">Home</Link>
          {!isLoggedIn && <Link to="/login">Members Login</Link>}
          <div className="navbar__menu">
            <button onClick={toggleMenu} className="navbar__menu-button">
              Menu <span className="navbar__menu-arrow">&#9660;</span>
            </button>
            {menuOpen && (
              <div className="navbar__dropdown">
                <Link to="/whats-new">What's New</Link>
                <Link to="/highlights">Highlights</Link>
                <Link to="/info">Info</Link>
              </div>
            )}
          </div>
        </div>
        {isLoggedIn && (
          <div className="navbar__login-info">
            <button>Login</button>
            <Link to="/how-to-become-a-member">How to become a member?</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export { Header };
