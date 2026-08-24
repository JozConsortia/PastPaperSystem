import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* =========================================
          NAVIGATION
      ========================================== */}

      <header className="home-header">
        <div className="home-nav">

          {/* LOGO */}

          <Link
            to="/"
            className="home-logo"
          >
            <div className="home-logo-icon">
              P
            </div>

            <div className="home-logo-text">
              <strong>PastPaper</strong>
              <span>Hub</span>
            </div>
          </Link>

          {/* MAIN NAVIGATION */}

          <nav className="home-navigation">

            <Link to="/">
              Home
            </Link>

            {/* =================================
                EDUCATION LEVELS
            ================================== */}

            <div className="education-dropdown">

              <button
                type="button"
                className="education-dropdown-button"
                aria-haspopup="true"
              >
                <span>
                  Education Levels
                </span>

                <span className="dropdown-arrow">
                  ▾
                </span>
              </button>

              <div className="education-dropdown-menu">

                {/* PRIMARY SCHOOL */}

                <div className="education-menu-section">

                  <div className="education-menu-main">

                    <div className="education-menu-icon">
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

                  <div className="education-sub-links">

                    <Link
                      to="/primary/phases/foundation"
                    >
                      <span>
                        Foundation Phase
                      </span>

                      <small>
                        Grades R – 3
                      </small>
                    </Link>

                    <Link
                      to="/primary/phases/intermediate"
                    >
                      <span>
                        Intermediate Phase
                      </span>

                      <small>
                        Grades 4 – 6
                      </small>
                    </Link>

                    <Link
                      to="/primary/phases/senior"
                    >
                      <span>
                        Senior Phase
                      </span>

                      <small>
                        Grades 7 – 9
                      </small>
                    </Link>

                  </div>

                </div>

                {/* HIGH SCHOOL */}

                <div className="education-menu-section">

                  <div className="education-menu-main">

                    <div className="education-menu-icon">
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

                  <div className="education-sub-links">

                    <Link
                      to="/high-school"
                      className="education-featured-link"
                    >
                      <span>
                        FET Phase
                      </span>

                      <small>
                        Grades 10 – 12
                      </small>

                      <b>
                        →
                      </b>
                    </Link>

                  </div>

                </div>

                {/* TVET */}

                <div className="education-menu-section">

                  <div className="education-menu-main">

                    <div className="education-menu-icon">
                      🛠️
                    </div>

                    <div>
                      <strong>
                        TVET College
                      </strong>

                      <span>
                        N4 – N6
                      </span>
                    </div>

                  </div>

                  <div className="education-sub-links">

                    <span className="disabled-menu-link">

                      <span>
                        TVET Programmes
                      </span>

                      <small>
                        Courses & Modules
                      </small>

                      <em>
                        Coming Soon
                      </em>

                    </span>

                  </div>

                </div>

                {/* UNIVERSITY */}

                <div className="education-menu-section">

                  <div className="education-menu-main">

                    <div className="education-menu-icon">
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

                  <div className="education-sub-links">

                    <span className="disabled-menu-link">

                      <span>
                        University Courses
                      </span>

                      <small>
                        Modules & Codes
                      </small>

                      <em>
                        Coming Soon
                      </em>

                    </span>

                  </div>

                </div>

                {/* FOOTER */}

                <div className="education-menu-footer">
                  Supporting learners from school
                  to higher education.
                </div>

              </div>

            </div>

            <a href="#how-it-works">
              How It Works
            </a>

          </nav>

          {/* ACTIONS */}

          <div className="home-actions">

            <Link
              to="/login"
              className="login-link"
            >
              Log In
            </Link>

            <Link
              to="/register"
              className="register-link"
            >
              Create Account
            </Link>

          </div>

        </div>
      </header>

      {/* =========================================
          MAIN CONTENT
      ========================================== */}

      <main>

        {/* =====================================
            HERO
        ====================================== */}

        <section className="hero">

          <div className="hero-content">

            <div className="hero-badge">
              <span></span>
              Your academic resource platform
            </div>

            <h1>
              Find past papers.
              <br />
              <span>
                Study with confidence.
              </span>
            </h1>

            <p>
              Find past papers and examination resources
              organised according to your education level,
              grade, subject, course and module.
            </p>

            <div className="hero-buttons">

              <Link
                to="/primary"
                className="primary-button"
              >
                Explore Primary School
                <span>→</span>
              </Link>

              <a
                href="#levels"
                className="secondary-button"
              >
                Explore Education Levels
              </a>

            </div>

          </div>

          {/* SEARCH */}

          <div className="search-card">

            <div>
              <span className="search-label">
                SEARCH RESOURCES
              </span>

              <h2>
                What are you looking for?
              </h2>
            </div>

            <div className="search-box">

              <span>
                ⌕
              </span>

              <input
                type="text"
                placeholder="Search for a grade, subject, course or module..."
              />

              <button type="button">
                Search
              </button>

            </div>

            <div className="popular-searches">

              <span>
                Popular:
              </span>

              <Link to="/primary">
                Primary School
              </Link>

              <Link to="/primary/phases/foundation">
                Foundation Phase
              </Link>

              <Link to="/high-school">
                High School
              </Link>

            </div>

          </div>

        </section>

        {/* =====================================
            EDUCATION LEVELS
        ====================================== */}

        <section
          id="levels"
          className="levels-section"
        >

          <div className="section-heading">

            <div>

              <p>
                EDUCATION LEVELS
              </p>

              <h2>
                One platform.
                <span>
                  Every learner.
                </span>
              </h2>

            </div>

            <p>
              From the Foundation Phase through
              university, the platform is designed
              to organise academic resources around
              the way learners study.
            </p>

          </div>

          <div className="levels-grid">

            {/* =================================
                PRIMARY SCHOOL
            ================================== */}

            <div className="level-card level-card-active">

              <div className="level-icon">
                📚
              </div>

              <div className="level-number">
                01
              </div>

              <h3>
                Primary School
              </h3>

              <span>
                Grades R – 9
              </span>

              <p>
                Explore Foundation, Intermediate and
                Senior Phase resources organised by
                grade, subject and language.
              </p>

              <div className="level-phase-list">

                <Link to="/primary/phases/foundation">
                  <span>
                    Foundation · R – 3
                  </span>

                  <b>
                    →
                  </b>
                </Link>

                <Link to="/primary/phases/intermediate">
                  <span>
                    Intermediate · 4 – 6
                  </span>

                  <b>
                    →
                  </b>
                </Link>

                <Link to="/primary/phases/senior">
                  <span>
                    Senior · 7 – 9
                  </span>

                  <b>
                    →
                  </b>
                </Link>

              </div>

              <Link
                to="/primary"
                className="level-main-link"
              >
                Explore Primary School →
              </Link>

            </div>

            {/* =================================
                HIGH SCHOOL
            ================================== */}

            <Link
              to="/high-school"
              className="level-card level-card-link"
            >

              <div className="level-icon">
                🎓
              </div>

              <div className="level-number">
                02
              </div>

              <h3>
                High School
              </h3>

              <span>
                FET · Grades 10 – 12
              </span>

              <p>
                Explore FET Phase subjects and past
                papers for Grades 10, 11 and 12.
              </p>

              <div className="level-highschool-list">

                <span>
                  Grade 10
                </span>

                <span>
                  Grade 11
                </span>

                <span>
                  Grade 12
                </span>

              </div>

              <strong className="level-main-link">
                Explore High School →
              </strong>

            </Link>

            {/* =================================
                TVET
            ================================== */}

            <div className="level-card">

              <div className="level-icon">
                🛠️
              </div>

              <div className="level-number">
                03
              </div>

              <h3>
                TVET College
              </h3>

              <span>
                N4 – N6
              </span>

              <p>
                Find resources using programmes,
                courses, modules and module codes.
              </p>

              <strong className="coming-soon">
                Coming Soon
              </strong>

            </div>

            {/* =================================
                UNIVERSITY
            ================================== */}

            <div className="level-card">

              <div className="level-icon">
                🏛️
              </div>

              <div className="level-number">
                04
              </div>

              <h3>
                University
              </h3>

              <span>
                Higher Education
              </span>

              <p>
                Search by institution, qualification,
                course, module name and module code.
              </p>

              <strong className="coming-soon">
                Coming Soon
              </strong>

            </div>

          </div>

        </section>

        {/* =====================================
            HOW IT WORKS
        ====================================== */}

        <section
          id="how-it-works"
          className="steps-section"
        >

          <div className="section-heading centered">

            <p>
              HOW IT WORKS
            </p>

            <h2>
              Find what you need
              <span>
                in three steps.
              </span>
            </h2>

          </div>

          <div className="steps-grid">

            <div className="step-card">

              <div className="step-number">
                01
              </div>

              <div className="step-icon">
                🔎
              </div>

              <h3>
                Choose your level
              </h3>

              <p>
                Select your education level and
                find the resources available for you.
              </p>

            </div>

            <div className="step-card">

              <div className="step-number">
                02
              </div>

              <div className="step-icon">
                📖
              </div>

              <h3>
                Select your subject
              </h3>

              <p>
                Choose your grade and subject,
                or your course and module.
              </p>

            </div>

            <div className="step-card">

              <div className="step-number">
                03
              </div>

              <div className="step-icon">
                ⬇
              </div>

              <h3>
                Study
              </h3>

              <p>
                Open a past paper online or
                download it for your preparation.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================
            CTA
        ====================================== */}

        <section className="cta-section">

          <div>

            <p>
              START YOUR JOURNEY
            </p>

            <h2>
              Better preparation starts
              <span>
                with practice.
              </span>
            </h2>

            <p>
              Start with Primary School or explore
              the FET Phase for Grade 10–12 resources.
            </p>

            <div className="cta-buttons">

              <Link to="/primary">
                Explore Primary School →
              </Link>

              <Link
                to="/high-school"
                className="cta-secondary"
              >
                Explore High School →
              </Link>

            </div>

          </div>

        </section>

      </main>

      {/* =========================================
          FOOTER
      ========================================== */}

      <footer className="home-footer">

        <div className="footer-top">

          <div>

            <Link
              to="/"
              className="home-logo"
            >

              <div className="home-logo-icon">
                P
              </div>

              <div className="home-logo-text">
                <strong>PastPaper</strong>
                <span>Hub</span>
              </div>

            </Link>

            <p>
              Past papers made easier for every learner.
            </p>

          </div>

          <div className="footer-links">

            <h4>
              Platform
            </h4>

            <Link to="/">
              Home
            </Link>

            <a href="#levels">
              Education Levels
            </a>

            <a href="#how-it-works">
              How It Works
            </a>

            <Link to="/primary">
              Primary School
            </Link>

            <Link to="/high-school">
              High School
            </Link>

            <Link to="/login">
              Login
            </Link>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 PastPaperHub
          </span>

          <span>
            Built for learners.
          </span>

        </div>

      </footer>

    </div>
  );
}

export default Home;