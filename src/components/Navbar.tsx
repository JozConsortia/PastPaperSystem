import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="site-navbar">

      <div className="site-navbar-container">

        {/* =====================================
            LOGO
        ====================================== */}

        <Link
          to="/"
          className="site-logo"
          aria-label="PastPaperHub Home"
        >
          <div className="site-logo-icon">
            P
          </div>

          <div className="site-logo-text">
            <strong>PastPaper</strong>
            <span>Hub</span>
          </div>
        </Link>

        {/* =====================================
            MAIN NAVIGATION
        ====================================== */}

        <nav className="site-navigation">

          {/* HOME */}

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "site-nav-link active"
                : "site-nav-link"
            }
          >
            Home
          </NavLink>

          {/* =====================================
              EDUCATION LEVELS
          ====================================== */}

          <div className="site-education-dropdown">

            <button
              type="button"
              className="site-education-button"
              aria-haspopup="true"
            >
              <span>
                Education Levels
              </span>

              <span className="site-dropdown-arrow">
                ▾
              </span>
            </button>

            <div className="site-education-menu">

              {/* =================================
                  PRIMARY SCHOOL
              ================================== */}

              <div className="site-menu-section">

                <div className="site-menu-heading">

                  <div className="site-menu-icon">
                    📚
                  </div>

                  <div>
                    <strong>
                      Primary School
                    </strong>

                    <span>
                      Grades R – 9
                    </span>
                  </div>

                </div>

                <div className="site-menu-links">

                  <NavLink
                    to="/primary/phases/foundation"
                  >
                    <div>
                      <strong>
                        Foundation Phase
                      </strong>

                      <small>
                        Grades R – 3
                      </small>
                    </div>

                    <span>
                      →
                    </span>
                  </NavLink>

                  <NavLink
                    to="/primary/phases/intermediate"
                  >
                    <div>
                      <strong>
                        Intermediate Phase
                      </strong>

                      <small>
                        Grades 4 – 6
                      </small>
                    </div>

                    <span>
                      →
                    </span>
                  </NavLink>

                  <NavLink
                    to="/primary/phases/senior"
                  >
                    <div>
                      <strong>
                        Senior Phase
                      </strong>

                      <small>
                        Grades 7 – 9
                      </small>
                    </div>

                    <span>
                      →
                    </span>
                  </NavLink>

                  <NavLink
                    to="/primary/homework-assistant"
                  >
                    <div>
                      <strong>
                        Homework Tutor
                      </strong>

                      <small>
                        Guided help for Grades R - 6
                      </small>
                    </div>

                    <span>
                      →
                    </span>
                  </NavLink>

                </div>

              </div>

              {/* =================================
                  HIGH SCHOOL
              ================================== */}

              <div className="site-menu-section">

                <div className="site-menu-heading">

                  <div className="site-menu-icon">
                    🎓
                  </div>

                  <div>
                    <strong>
                      High School
                    </strong>

                    <span>
                      Grades 10 – 12
                    </span>
                  </div>

                </div>

                <div className="site-menu-links">

                  <NavLink
                    to="/high-school"
                  >
                    <div>
                      <strong>
                        FET Phase
                      </strong>

                      <small>
                        Grades 10 – 12
                      </small>
                    </div>

                    <span>
                      →
                    </span>
                  </NavLink>

                </div>

              </div>

              {/* =================================
                  TVET COLLEGE
              ================================== */}

              <div className="site-menu-section">

                <div className="site-menu-heading">

                  <div className="site-menu-icon">
                    🛠️
                  </div>

                  <div>
                    <strong>
                      TVET College
                    </strong>

                    <span>
                      Vocational Education
                    </span>
                  </div>

                </div>

                <div className="site-menu-links">

                  <NavLink
                    to="/tvet"
                    className={({ isActive }) =>
                      isActive
                        ? "site-tvet-link active"
                        : "site-tvet-link"
                    }
                  >
                    <div>
                      <strong>
                        TVET Programmes
                      </strong>

                      <small>
                        NC(V) · NATED · Occupational
                      </small>
                    </div>

                    <span>
                      →
                    </span>
                  </NavLink>

                </div>

              </div>

              {/* =================================
                  UNIVERSITY
              ================================== */}

              <div className="site-menu-section">

                <div className="site-menu-heading">

                  <div className="site-menu-icon">
                    🏛️
                  </div>

                  <div>
                    <strong>
                      University
                    </strong>

                    <span>
                      Higher Education
                    </span>
                  </div>

                </div>

                <div className="site-menu-links">

                  <div className="site-disabled-link">

                    <div>
                      <strong>
                        University Programmes
                      </strong>

                      <small>
                        Courses · Modules
                      </small>
                    </div>

                    <em>
                      Coming Soon
                    </em>

                  </div>

                </div>

              </div>

              {/* =================================
                  MENU FOOTER
              ================================== */}

              <div className="site-menu-footer">

                <span>
                  From school to higher education,
                  find academic resources in one place.
                </span>

              </div>

            </div>

          </div>

          {/* =====================================
              HOW IT WORKS
          ====================================== */}

          <a
            href="/#how-it-works"
            className="site-nav-link"
          >
            How It Works
          </a>

        </nav>

        {/* =====================================
            ACCOUNT ACTIONS
        ====================================== */}

        <div className="site-navbar-actions">

          <Link
            to="/login"
            className="site-login-button"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="site-register-button"
          >
            Create Account
          </Link>

        </div>

      </div>

    </header>
  );
}

export default Navbar;