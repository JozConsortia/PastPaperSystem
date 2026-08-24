import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="site-navbar">
      <div className="site-navbar-container">

        {/* LOGO */}
        <Link to="/" className="site-logo">
          <div className="site-logo-icon">P</div>

          <div className="site-logo-text">
            <strong>PastPaper</strong>
            <span>Hub</span>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="site-navigation">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/primary"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Primary School
          </NavLink>

          <NavLink
            to="/primary/foundation-phase"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Foundation Phase
          </NavLink>
        </nav>

        {/* ACCOUNT ACTIONS */}
        <div className="site-navbar-actions">
          <Link to="/login" className="nav-login-button">
            Login
          </Link>

          <Link to="/register" className="nav-register-button">
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;