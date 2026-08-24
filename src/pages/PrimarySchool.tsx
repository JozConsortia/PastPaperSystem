import { Link } from "react-router-dom";
import "./PrimarySchool.css";

function PrimarySchool() {
  return (
    <div className="primary-page">
      <header className="primary-header">
        <div className="primary-nav">
          <Link to="/" className="primary-logo">
            <div className="primary-logo-icon">P</div>

            <div>
              <strong>PastPaper</strong>
              <span>Hub</span>
            </div>
          </Link>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/primary">Primary School</Link>
            <Link to="/login">Login</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="primary-hero">
          <p className="primary-label">PRIMARY SCHOOL</p>

          <h1>
            Find past papers for
            <span>every primary grade.</span>
          </h1>

          <p>
            Select a phase and grade to find examination papers,
            tests and other learning resources.
          </p>

          <Link
            to="/primary/foundation-phase"
            className="primary-button"
          >
            Explore Foundation Phase →
          </Link>
        </section>

        <section className="phase-section">
          <div className="phase-heading">
            <p>PRIMARY SCHOOL PHASES</p>

            <h2>Choose your phase</h2>
          </div>

          <div className="phase-grid">
            <Link
              to="/primary/foundation-phase"
              className="phase-card active"
            >
              <div className="phase-number">01</div>

              <div className="phase-icon">📚</div>

              <h3>Foundation Phase</h3>

              <span>Grades 1 – 3</span>

              <p>
                Early primary school resources including
                Mathematics, Languages and Life Skills.
              </p>

              <strong>Explore →</strong>
            </Link>

            <div className="phase-card">
              <div className="phase-number">02</div>

              <div className="phase-icon">📖</div>

              <h3>Intermediate Phase</h3>

              <span>Grades 4 – 6</span>

              <p>
                Resources for learners progressing through
                the intermediate phase.
              </p>

              <strong className="coming">
                Coming Soon
              </strong>
            </div>

            <div className="phase-card">
              <div className="phase-number">03</div>

              <div className="phase-icon">🎓</div>

              <h3>Senior Phase</h3>

              <span>Grade 7</span>

              <p>
                Grade 7 examination papers and learning
                resources.
              </p>

              <strong className="coming">
                Coming Soon
              </strong>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PrimarySchool;