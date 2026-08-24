import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <header className="home-header">
        <div className="home-nav">
          <Link to="/" className="home-logo">
            <div className="home-logo-icon">P</div>

            <div className="home-logo-text">
              <strong>PastPaper</strong>
              <span>Hub</span>
            </div>
          </Link>

          <nav className="home-navigation">
            <Link to="/">Home</Link>
            <Link to="/primary">Primary School</Link>
            <a href="#levels">Education Levels</a>
            <a href="#how-it-works">How It Works</a>
          </nav>

          <div className="home-actions">
            <Link to="/login" className="login-link">
              Log In
            </Link>

            <Link to="/register" className="register-link">
              Create Account
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">
              <span></span>
              Your academic resource platform
            </div>

            <h1>
              Find past papers.
              <br />
              <span>Study with confidence.</span>
            </h1>

            <p>
              Find past papers and examination resources organised according
              to your education level, grade, subject, course and module.
            </p>

            <div className="hero-buttons">
              <Link to="/primary" className="primary-button">
                Explore Primary School
                <span>→</span>
              </Link>

              <a href="#levels" className="secondary-button">
                Explore Education Levels
              </a>
            </div>
          </div>

          <div className="search-card">
            <div>
              <span className="search-label">SEARCH RESOURCES</span>

              <h2>What are you looking for?</h2>
            </div>

            <div className="search-box">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search for a grade, subject, course or module..."
              />

              <button type="button">
                Search
              </button>
            </div>

            <div className="popular-searches">
              <span>Popular:</span>

              <Link to="/primary">Primary School</Link>
              <Link to="/primary">Grade 1</Link>
              <Link to="/primary">Mathematics</Link>
            </div>
          </div>
        </section>

        <section id="levels" className="levels-section">
          <div className="section-heading">
            <div>
              <p>EDUCATION LEVELS</p>

              <h2>
                One platform.
                <span>Every learner.</span>
              </h2>
            </div>

            <p>
              The platform is designed to support learners from primary school
              through higher education.
            </p>
          </div>

          <div className="levels-grid">
            <Link
              to="/primary"
              className="level-card level-card-active"
            >
              <div className="level-icon">📚</div>

              <div className="level-number">01</div>

              <h3>Primary School</h3>

              <span>Grades 1 – 7</span>

              <p>
                Find past papers and learning resources for primary school
                learners.
              </p>

              <strong>Explore →</strong>
            </Link>

            <div className="level-card">
              <div className="level-icon">🎓</div>

              <div className="level-number">02</div>

              <h3>High School</h3>

              <span>Grades 8 – 12</span>

              <p>
                Search papers by grade, subject, year, term and examination.
              </p>

              <strong className="coming-soon">Coming Soon</strong>
            </div>

            <div className="level-card">
              <div className="level-icon">🛠</div>

              <div className="level-number">03</div>

              <h3>TVET College</h3>

              <span>N4 – N6</span>

              <p>
                Find resources using courses, levels, modules and module
                codes.
              </p>

              <strong className="coming-soon">Coming Soon</strong>
            </div>

            <div className="level-card">
              <div className="level-icon">🏛</div>

              <div className="level-number">04</div>

              <h3>University</h3>

              <span>Higher Education</span>

              <p>
                Search by institution, course, module name and module code.
              </p>

              <strong className="coming-soon">Coming Soon</strong>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="steps-section">
          <div className="section-heading centered">
            <p>HOW IT WORKS</p>

            <h2>
              Find what you need
              <span>in three steps.</span>
            </h2>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>

              <div className="step-icon">🔎</div>

              <h3>Choose your level</h3>

              <p>
                Select your education level and find the resources available
                for you.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>

              <div className="step-icon">📖</div>

              <h3>Select your subject</h3>

              <p>
                Choose your grade and subject or your course and module.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>

              <div className="step-icon">⬇</div>

              <h3>Study</h3>

              <p>
                Open a past paper online or download it for your preparation.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div>
            <p>START YOUR JOURNEY</p>

            <h2>
              Better preparation starts
              <span>with practice.</span>
            </h2>

            <p>
              Start with our Primary School section and explore Foundation
              Phase resources.
            </p>

            <Link to="/primary">
              Explore Primary School →
            </Link>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <div className="footer-top">
          <div>
            <Link to="/" className="home-logo">
              <div className="home-logo-icon">P</div>

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
            <h4>Platform</h4>
            <Link to="/">Home</Link>
            <Link to="/primary">Primary School</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 PastPaperHub</span>
          <span>Built for learners.</span>
        </div>
      </footer>
    </div>
  );
}

export default Home;