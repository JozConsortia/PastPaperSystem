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
                        Vocational Education
                      </span>
                    </div>

                  </div>

                  <div className="education-sub-links">

                    <span className="disabled-menu-link">

                      <span>
                        TVET Programmes
                      </span>

                      <small>
                        NC(V) · NATED · Occupational
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
                        University Programmes
                      </span>

                      <small>
                        Courses · Modules
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

          {/* ACCOUNT ACTIONS */}

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
          MAIN
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

                <span>
                  →
                </span>
              </Link>

              <a
                href="#levels"
                className="secondary-button"
              >
                Explore Education Levels
              </a>

            </div>

          </div>

          {/* =====================================
              SEARCH
          ====================================== */}

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
              Explore academic resources from school
              through vocational education and higher
              education.
            </p>

          </div>

          <div className="levels-grid">

            {/* =================================
                PRIMARY SCHOOL
            ================================== */}

            <div className="level-card level-card-primary">

              <div className="level-card-top">

                <div className="level-icon">
                  📚
                </div>

                <span className="level-number">
                  01
                </span>

              </div>

              <div className="level-card-content">

                <p className="level-card-label">
                  SCHOOL EDUCATION
                </p>

                <h3>
                  Primary School
                </h3>

                <span className="level-card-range">
                  Grades R – 9
                </span>

                <p className="level-card-description">
                  Explore Foundation, Intermediate and
                  Senior Phase resources organised by
                  grade, subject and language.
                </p>

              </div>

              <div className="level-phase-list">

                <Link to="/primary/phases/foundation">
                  <span>
                    Foundation Phase
                  </span>

                  <small>
                    R – 3
                  </small>

                  <b>
                    →
                  </b>
                </Link>

                <Link to="/primary/phases/intermediate">
                  <span>
                    Intermediate Phase
                  </span>

                  <small>
                    4 – 6
                  </small>

                  <b>
                    →
                  </b>
                </Link>

                <Link to="/primary/phases/senior">
                  <span>
                    Senior Phase
                  </span>

                  <small>
                    7 – 9
                  </small>

                  <b>
                    →
                  </b>
                </Link>

              </div>

              <Link
                to="/primary"
                className="level-card-button"
              >
                Explore Primary School

                <span>
                  →
                </span>
              </Link>

            </div>

            {/* =================================
                HIGH SCHOOL
            ================================== */}

            <Link
              to="/high-school"
              className="level-card level-card-link"
            >

              <div className="level-card-top">

                <div className="level-icon">
                  🎓
                </div>

                <span className="level-number">
                  02
                </span>

              </div>

              <div className="level-card-content">

                <p className="level-card-label">
                  SCHOOL EDUCATION
                </p>

                <h3>
                  High School
                </h3>

                <span className="level-card-range">
                  FET · Grades 10 – 12
                </span>

                <p className="level-card-description">
                  Explore FET Phase subjects and
                  past papers for Grades 10, 11
                  and 12.
                </p>

              </div>

              <div className="level-grade-list">

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

              <div className="level-card-button">
                Explore High School

                <span>
                  →
                </span>
              </div>

            </Link>

            {/* =================================
                TVET COLLEGE
            ================================== */}

            <div className="level-card">

              <div className="level-card-top">

                <div className="level-icon">
                  🛠️
                </div>

                <span className="level-number">
                  03
                </span>

              </div>

              <div className="level-card-content">

                <p className="level-card-label">
                  VOCATIONAL EDUCATION
                </p>

                <h3>
                  TVET College
                </h3>

                <span className="level-card-range">
                  Technical & Vocational
                </span>

                <p className="level-card-description">
                  Find vocational resources across
                  NC(V), NATED and occupational
                  programmes.
                </p>

              </div>

              <div className="level-grade-list">

                <span>
                  NC(V)
                </span>

                <span>
                  NATED
                </span>

                <span>
                  Occupational
                </span>

              </div>

              <div className="level-card-button level-card-button-disabled">
                Coming Soon
              </div>

            </div>

            {/* =================================
                UNIVERSITY
            ================================== */}

            <div className="level-card">

              <div className="level-card-top">

                <div className="level-icon">
                  🏛️
                </div>

                <span className="level-number">
                  04
                </span>

              </div>

              <div className="level-card-content">

                <p className="level-card-label">
                  HIGHER EDUCATION
                </p>

                <h3>
                  University
                </h3>

                <span className="level-card-range">
                  Higher Education
                </span>

                <p className="level-card-description">
                  Search for academic resources by
                  institution, qualification, course,
                  module and module code.
                </p>

              </div>

              <div className="level-grade-list">

                <span>
                  Institution
                </span>

                <span>
                  Course
                </span>

                <span>
                  Module
                </span>

              </div>

              <div className="level-card-button level-card-button-disabled">
                Coming Soon
              </div>

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

          <div className="steps-header">

            <div>

              <p>
                HOW IT WORKS
              </p>

              <h2>
                Find what you need.
                <span>
                  Study smarter.
                </span>
              </h2>

            </div>

            <p>
              Finding the right past paper should be
              simple. Follow three straightforward steps
              to get to the resource you need.
            </p>

          </div>

          <div className="steps-grid">

            {/* STEP 1 */}

            <div className="step-card">

              <div className="step-card-number">
                01
              </div>

              <div className="step-icon">
                🔎
              </div>

              <p className="step-label">
                STEP ONE
              </p>

              <h3>
                Choose your education level
              </h3>

              <p className="step-description">
                Start by selecting Primary School,
                High School, TVET College or University.
              </p>

              <div className="step-footer">
                <span>
                  Choose your path
                </span>

                <span>
                  →
                </span>
              </div>

            </div>

            {/* CONNECTOR */}

            <div className="step-connector">
              <span>
                →
              </span>
            </div>

            {/* STEP 2 */}

            <div className="step-card">

              <div className="step-card-number">
                02
              </div>

              <div className="step-icon">
                📖
              </div>

              <p className="step-label">
                STEP TWO
              </p>

              <h3>
                Select your grade or module
              </h3>

              <p className="step-description">
                Choose your grade, phase, programme,
                course, subject or module.
              </p>

              <div className="step-footer">
                <span>
                  Narrow your search
                </span>

                <span>
                  →
                </span>
              </div>

            </div>

            {/* CONNECTOR */}

            <div className="step-connector">
              <span>
                →
              </span>
            </div>

            {/* STEP 3 */}

            <div className="step-card">

              <div className="step-card-number">
                03
              </div>

              <div className="step-icon">
                📄
              </div>

              <p className="step-label">
                STEP THREE
              </p>

              <h3>
                Open and study
              </h3>

              <p className="step-description">
                Open the past paper, study online,
                practise your answers and prepare
                for your assessment.
              </p>

              <div className="step-footer">
                <span>
                  Start studying
                </span>

                <span>
                  →
                </span>
              </div>

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
              Start exploring past papers today and
              prepare with resources organised around
              the way you study.
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