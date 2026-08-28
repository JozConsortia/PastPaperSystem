import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./University.css";

function University() {
  return (
    <div className="university-page">

      <header className="university-header">
        <Navbar />
      </header>

      <section className="university-hero">

        <p className="university-label">
          HIGHER EDUCATION
        </p>

        <h1>
          University
          <span>
            Find your academic resources.
          </span>
        </h1>

        <p>
          Search university past papers by institution,
          qualification, study area, module and year.
        </p>

        <div className="university-hero-actions">

          <Link
            to="/university/institutions"
            className="university-primary-button"
          >
            Explore Universities
            <span>→</span>
          </Link>

          <a
            href="#how-university-works"
            className="university-secondary-button"
          >
            How it works
          </a>

        </div>

      </section>

      <main className="university-main">

        {/* =====================================
            SEARCH FLOW
        ====================================== */}

        <section className="university-intro-section">

          <div className="university-section-heading">

            <div>

              <p>
                UNIVERSITY RESOURCES
              </p>

              <h2>
                Search the way
                <span>
                  you study.
                </span>
              </h2>

            </div>

            <p>
              University resources are organised
              differently from school and TVET.
              Institution and qualification information
              are important parts of the search.
            </p>

          </div>

          <div className="university-feature-grid">

            <Link
              to="/university/institutions"
              className="university-feature-card"
            >

              <div className="university-feature-icon">
                🏛️
              </div>

              <span>
                01
              </span>

              <h3>
                Choose your university
              </h3>

              <p>
                Select the institution where the
                module or course is offered.
              </p>

              <strong>
                Browse institutions →
              </strong>

            </Link>

            <Link
              to="/university/qualifications"
              className="university-feature-card"
            >

              <div className="university-feature-icon">
                🎓
              </div>

              <span>
                02
              </span>

              <h3>
                Choose your qualification
              </h3>

              <p>
                Browse qualification types such as
                diplomas, degrees and postgraduate study.
              </p>

              <strong>
                Browse qualifications →
              </strong>

            </Link>

            <Link
              to="/university/study-areas"
              className="university-feature-card"
            >

              <div className="university-feature-icon">
                📚
              </div>

              <span>
                03
              </span>

              <h3>
                Find your study area
              </h3>

              <p>
                Start with broad areas such as IT,
                engineering, business or health.
              </p>

              <strong>
                Browse study areas →
              </strong>

            </Link>

          </div>

        </section>

        {/* =====================================
            QUALIFICATION OVERVIEW
        ====================================== */}

        <section className="university-qualification-section">

          <div className="university-section-heading">

            <div>

              <p>
                QUALIFICATION LEVELS
              </p>

              <h2>
                From certificates
                <span>
                  to doctorates.
                </span>
              </h2>

            </div>

            <p>
              Higher-education qualifications span
              NQF Levels 5 through 10.
            </p>

          </div>

          <div className="university-qualification-strip">

            <div>
              <strong>
                NQF 5
              </strong>

              <span>
                Higher Certificate
              </span>
            </div>

            <div>
              <strong>
                NQF 6
              </strong>

              <span>
                Diploma
              </span>
            </div>

            <div>
              <strong>
                NQF 7
              </strong>

              <span>
                Bachelor's / Advanced Diploma
              </span>
            </div>

            <div>
              <strong>
                NQF 8
              </strong>

              <span>
                Honours / Postgraduate Diploma
              </span>
            </div>

            <div>
              <strong>
                NQF 9
              </strong>

              <span>
                Master's
              </span>
            </div>

            <div>
              <strong>
                NQF 10
              </strong>

              <span>
                Doctoral
              </span>
            </div>

          </div>

        </section>

        {/* =====================================
            HOW IT WORKS
        ====================================== */}

        <section
          id="how-university-works"
          className="university-how-section"
        >

          <div className="university-section-heading centered">

            <div>

              <p>
                HOW IT WORKS
              </p>

              <h2>
                Find a university paper
                <span>
                  in four steps.
                </span>
              </h2>

            </div>

          </div>

          <div className="university-step-grid">

            <div className="university-step-card">

              <div className="university-step-number">
                01
              </div>

              <div className="university-step-icon">
                🏛️
              </div>

              <h3>
                Select institution
              </h3>

              <p>
                Choose the university where the
                course or module is offered.
              </p>

            </div>

            <div className="university-step-card">

              <div className="university-step-number">
                02
              </div>

              <div className="university-step-icon">
                🎓
              </div>

              <h3>
                Select qualification
              </h3>

              <p>
                Choose the qualification or programme
                you are studying.
              </p>

            </div>

            <div className="university-step-card">

              <div className="university-step-number">
                03
              </div>

              <div className="university-step-icon">
                📖
              </div>

              <h3>
                Select module
              </h3>

              <p>
                Find the correct module name and
                module code.
              </p>

            </div>

            <div className="university-step-card">

              <div className="university-step-number">
                04
              </div>

              <div className="university-step-icon">
                📄
              </div>

              <h3>
                Open the paper
              </h3>

              <p>
                View the available test, assignment
                or examination resources.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================
            CTA
        ====================================== */}

        <section className="university-cta">

          <div>

            <p>
              START EXPLORING
            </p>

            <h2>
              Your university.
              <span>
                Your modules.
              </span>
            </h2>

            <p>
              Start building the university section
              of PastPaperHub around the institution
              and modules you actually study.
            </p>

            <Link to="/university/institutions">
              Find your university →
            </Link>

          </div>

        </section>

      </main>

    </div>
  );
}

export default University;