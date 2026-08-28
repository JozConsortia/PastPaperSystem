import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import "./FoundationPhase.css";

function FoundationPhase() {
  return (
    <div className="foundation-page">

      {/* =====================================
          NAVIGATION
      ====================================== */}

      <header className="foundation-header">
        <Navbar />
      </header>

      {/* =====================================
          HERO
      ====================================== */}

      <section className="foundation-hero">

        <p className="foundation-label">
          FOUNDATION PHASE
        </p>

        <h1>
          Grades R – 3
          <span>Start Learning.</span>
        </h1>

        <p>
          Choose your grade to explore subjects, languages,
          past examination papers, tests and other learning
          resources for the Foundation Phase.
        </p>

      </section>

      {/* =====================================
          GRADES
      ====================================== */}

      <section className="grades-section">

        <div className="grades-heading">

          <p>
            CHOOSE YOUR GRADE
          </p>

          <h2>
            Select a grade
          </h2>

        </div>

        <div className="grades-grid">

          {/* =================================
              GRADE R
          ================================= */}

          <Link
            to="/primary/phases/foundation/grade/R"
            className="grade-card"
          >

            <div className="grade-card-top">

              <div className="grade-icon">
                R
              </div>

              <span>
                FOUNDATION
              </span>

            </div>

            <h3>
              Grade R
            </h3>

            <p>
              Explore learning resources and past papers
              designed for Grade R learners.
            </p>

            <div className="grade-card-action">
              <span>
                View Grade R
              </span>

              <span className="grade-arrow">
                →
              </span>
            </div>

          </Link>

          {/* =================================
              GRADE 1
          ================================= */}

          <Link
            to="/primary/phases/foundation/grade/1"
            className="grade-card"
          >

            <div className="grade-card-top">

              <div className="grade-icon">
                1
              </div>

              <span>
                FOUNDATION
              </span>

            </div>

            <h3>
              Grade 1
            </h3>

            <p>
              Find subjects and past papers to help
              Grade 1 learners prepare and practise.
            </p>

            <div className="grade-card-action">
              <span>
                View Grade 1
              </span>

              <span className="grade-arrow">
                →
              </span>
            </div>

          </Link>

          {/* =================================
              GRADE 2
          ================================= */}

          <Link
            to="/primary/phases/foundation/grade/2"
            className="grade-card"
          >

            <div className="grade-card-top">

              <div className="grade-icon">
                2
              </div>

              <span>
                FOUNDATION
              </span>

            </div>

            <h3>
              Grade 2
            </h3>

            <p>
              Access Grade 2 subjects, practice material
              and past papers in one place.
            </p>

            <div className="grade-card-action">
              <span>
                View Grade 2
              </span>

              <span className="grade-arrow">
                →
              </span>
            </div>

          </Link>

          {/* =================================
              GRADE 3
          ================================= */}

          <Link
            to="/primary/phases/foundation/grade/3"
            className="grade-card"
          >

            <div className="grade-card-top">

              <div className="grade-icon">
                3
              </div>

              <span>
                FOUNDATION
              </span>

            </div>

            <h3>
              Grade 3
            </h3>

            <p>
              Prepare for Grade 3 assessments with
              organised subjects and past papers.
            </p>

            <div className="grade-card-action">
              <span>
                View Grade 3
              </span>

              <span className="grade-arrow">
                →
              </span>
            </div>

          </Link>

        </div>

      </section>

      {/* =====================================
          INFORMATION NOTE
      ====================================== */}

      <section className="foundation-note-section">

        <div className="foundation-note">

          <div className="foundation-note-icon">
            📚
          </div>

          <div>

            <h2>
              Build a strong foundation
            </h2>

            <p>
              The Foundation Phase covers Grades R to 3.
              Select your grade above to continue to the
              relevant subjects and learning resources.
              You can use the Past Paper System to practise,
              revise and prepare for assessments.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================
          BACK TO PHASES
      ====================================== */}

      <section className="foundation-back-section">

        <Link
          to="/primary/phases"
          className="foundation-back"
        >
          <span className="back-arrow">
            ←
          </span>

          Back to Primary Phases
        </Link>

      </section>

    </div>
  );
}

export default FoundationPhase;