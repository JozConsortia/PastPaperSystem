import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import "./IntermediatePhase.css";

function IntermediatePhase() {
  return (
    <div className="intermediate-page">

      {/* =====================================
          NAVIGATION
      ====================================== */}

      <header className="intermediate-header">
        <Navbar />
      </header>

      {/* =====================================
          HERO
      ====================================== */}

      <section className="intermediate-hero">

        <p className="intermediate-label">
          INTERMEDIATE PHASE
        </p>

        <h1>
          Grades 4 – 6
          <span>Keep Growing.</span>
        </h1>

        <p>
          Choose your grade to explore subjects, languages,
          past examination papers, tests and other learning
          resources for the Intermediate Phase.
        </p>

      </section>

      {/* =====================================
          GRADES
      ====================================== */}

      <section className="intermediate-section">

        <div className="intermediate-heading">

          <p>
            CHOOSE YOUR GRADE
          </p>

          <h2>
            Select a grade
          </h2>

          <span>
            Continue to your grade to view available subjects
            and past papers.
          </span>

        </div>

        <div className="intermediate-grades">

          {/* =================================
              GRADE 4
          ================================= */}

          <Link
            to="/primary/phases/intermediate/grade/4"
            className="intermediate-grade-card"
          >

            <div className="intermediate-grade-top">

              <div className="intermediate-grade-icon">
                4
              </div>

              <span>
                INTERMEDIATE
              </span>

            </div>

            <p className="intermediate-card-label">
              INTERMEDIATE PHASE
            </p>

            <h3>
              Grade 4
            </h3>

            <p className="intermediate-card-description">
              Explore Grade 4 subjects, learning resources
              and past papers to practise and prepare for
              assessments.
            </p>

            <div className="intermediate-card-action">
              <span>
                View Grade 4
              </span>

              <span className="intermediate-arrow">
                →
              </span>
            </div>

          </Link>

          {/* =================================
              GRADE 5
          ================================= */}

          <Link
            to="/primary/phases/intermediate/grade/5"
            className="intermediate-grade-card"
          >

            <div className="intermediate-grade-top">

              <div className="intermediate-grade-icon">
                5
              </div>

              <span>
                INTERMEDIATE
              </span>

            </div>

            <p className="intermediate-card-label">
              INTERMEDIATE PHASE
            </p>

            <h3>
              Grade 5
            </h3>

            <p className="intermediate-card-description">
              Access Grade 5 subjects, languages and
              organised past papers for effective revision.
            </p>

            <div className="intermediate-card-action">
              <span>
                View Grade 5
              </span>

              <span className="intermediate-arrow">
                →
              </span>
            </div>

          </Link>

          {/* =================================
              GRADE 6
          ================================= */}

          <Link
            to="/primary/phases/intermediate/grade/6"
            className="intermediate-grade-card"
          >

            <div className="intermediate-grade-top">

              <div className="intermediate-grade-icon">
                6
              </div>

              <span>
                INTERMEDIATE
              </span>

            </div>

            <p className="intermediate-card-label">
              INTERMEDIATE PHASE
            </p>

            <h3>
              Grade 6
            </h3>

            <p className="intermediate-card-description">
              Prepare for Grade 6 assessments using
              organised subjects, resources and past papers.
            </p>

            <div className="intermediate-card-action">
              <span>
                View Grade 6
              </span>

              <span className="intermediate-arrow">
                →
              </span>
            </div>

          </Link>

        </div>

      </section>

      {/* =====================================
          INFORMATION
      ====================================== */}

      <section className="intermediate-info-section">

        <div className="intermediate-info-card">

          <div className="intermediate-info-icon">
            📖
          </div>

          <div>

            <h2>
              Prepare with confidence
            </h2>

            <p>
              The Intermediate Phase covers Grades 4 to 6.
              Select your grade above to continue to the
              relevant subjects, languages and past papers.
              Use the resources to practise, revise and
              prepare for assessments.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================
          BACK TO PHASES
      ====================================== */}

      <section className="intermediate-back-section">

        <Link
          to="/primary/phases"
          className="intermediate-back"
        >
          <span className="intermediate-back-arrow">
            ←
          </span>

          Back to Primary Phases
        </Link>

      </section>

    </div>
  );
}

export default IntermediatePhase;