import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./PrimarySchool.css";

function PrimarySchool() {
  return (
    <div className="primary-page">
      <Navbar />

      <main>
        {/* =====================================
            HERO
        ====================================== */}
        <section className="primary-hero">
          <div className="primary-hero-content">
            <p className="primary-label">
              SOUTH AFRICAN PRIMARY SCHOOL
            </p>

            <h1>
              Primary School
              <span>Past Papers</span>
            </h1>

            <p className="primary-hero-description">
              Find past papers and learning resources for South African
              primary school learners, organised by phase, grade,
              subject and language.
            </p>

            <div className="primary-hero-actions">
              <Link
                to="/primary/phases"
                className="primary-main-button"
              >
                Explore Primary Phases
                <span>→</span>
              </Link>

              <Link
                to="/primary/homework-assistant"
                className="primary-secondary-button"
              >
                Homework Tutor
                <span>✦</span>
              </Link>
            </div>
          </div>

          <div className="primary-hero-card">
            <div className="primary-hero-card-icon">
              📚
            </div>

            <div>
              <p>
                ONE PLATFORM
              </p>

              <h2>
                Foundation to Senior Phase
              </h2>

              <span>
                Grade R through Grade 7
              </span>
            </div>
          </div>
        </section>

        {/* =====================================
            PHASE OVERVIEW
        ====================================== */}
        <section className="primary-summary-section">
          <div className="primary-summary-heading">
            <p>
              PRIMARY SCHOOL PHASES
            </p>

            <h2>
              Everything organised by phase
            </h2>

            <span>
              Choose a phase, then select the learner's grade.
            </span>
          </div>

          <div className="primary-summary-grid">

            {/* FOUNDATION */}
            <Link
              to="/primary/phases/foundation"
              className="primary-summary-card"
            >
              <div className="primary-summary-icon">
                📚
              </div>

              <div className="primary-summary-number">
                01
              </div>

              <p className="primary-summary-label">
                FOUNDATION PHASE
              </p>

              <h3>
                Grade R – 3
              </h3>

              <p className="primary-summary-description">
                Early learning resources for Grade R, Grade 1,
                Grade 2 and Grade 3.
              </p>

              <div className="primary-summary-grades">
                <span>Grade R</span>
                <span>Grade 1</span>
                <span>Grade 2</span>
                <span>Grade 3</span>
              </div>

              <strong>
                View Foundation Phase →
              </strong>
            </Link>

            {/* INTERMEDIATE */}
            <Link
              to="/primary/phases/intermediate"
              className="primary-summary-card"
            >
              <div className="primary-summary-icon">
                📖
              </div>

              <div className="primary-summary-number">
                02
              </div>

              <p className="primary-summary-label">
                INTERMEDIATE PHASE
              </p>

              <h3>
                Grade 4 – 6
              </h3>

              <p className="primary-summary-description">
                Resources for Grade 4, Grade 5 and Grade 6 learners.
              </p>

              <div className="primary-summary-grades">
                <span>Grade 4</span>
                <span>Grade 5</span>
                <span>Grade 6</span>
              </div>

              <strong>
                View Intermediate Phase →
              </strong>
            </Link>

            {/* SENIOR */}
            <Link
              to="/primary/phases/senior"
              className="primary-summary-card"
            >
              <div className="primary-summary-icon">
                🎓
              </div>

              <div className="primary-summary-number">
                03
              </div>

              <p className="primary-summary-label">
                SENIOR PHASE
              </p>

              <h3>
                Grade 7
              </h3>

              <p className="primary-summary-description">
                Grade 7 resources and Senior Phase subjects.
              </p>

              <div className="primary-summary-grades">
                <span>Grade 7</span>
              </div>

              <strong>
                View Senior Phase →
              </strong>
            </Link>

          </div>
        </section>

        {/* =====================================
            HOW IT WORKS
        ====================================== */}
        <section className="primary-how-section">
          <div className="primary-how-heading">
            <p>
              HOW IT WORKS
            </p>

            <h2>
              Find your past paper in three steps
            </h2>
          </div>

          <div className="primary-how-grid">

            <div className="primary-how-card">
              <div className="primary-how-number">
                01
              </div>

              <div className="primary-how-icon">
                🎓
              </div>

              <h3>
                Choose a phase
              </h3>

              <p>
                Select Foundation, Intermediate or Senior Phase.
              </p>
            </div>

            <div className="primary-how-card">
              <div className="primary-how-number">
                02
              </div>

              <div className="primary-how-icon">
                📖
              </div>

              <h3>
                Choose a grade
              </h3>

              <p>
                Select the learner's specific grade.
              </p>
            </div>

            <div className="primary-how-card">
              <div className="primary-how-number">
                03
              </div>

              <div className="primary-how-icon">
                🔎
              </div>

              <h3>
                Find your paper
              </h3>

              <p>
                Search by subject, language, year and term.
              </p>
            </div>

          </div>
        </section>

        {/* =====================================
            CTA
        ====================================== */}
        <section className="primary-cta-section">
          <div className="primary-cta-card">
            <div>
              <p>
                START LEARNING
              </p>

              <h2>
                Find the right past paper
                <span>for your grade.</span>
              </h2>

              <span>
                Explore all Primary School phases and begin studying.
              </span>
            </div>

            <Link
              to="/primary/phases"
              className="primary-cta-button"
            >
              Explore Phases →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PrimarySchool;