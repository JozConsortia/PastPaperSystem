import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import "./HighSchool.css";

function HighSchool() {
  return (
    <div className="high-school-page">

      {/* =====================================
          NAVIGATION
      ====================================== */}

      <header className="high-school-header">
        <Navbar />
      </header>

      {/* =====================================
          HERO
      ====================================== */}

      <section className="high-school-hero">

        <p className="high-school-label">
          HIGH SCHOOL
        </p>

        <h1>
          Grades 10 – 12
          <span>FET Phase.</span>
        </h1>

        <p>
          Find past papers and examination resources
          for South African high school learners. Choose
          the FET Phase to explore Grade 10, Grade 11 and
          Grade 12 resources.
        </p>

        <div className="high-school-buttons">

          <Link
            to="/high-school/fet"
            className="high-school-primary-button"
          >
            Explore FET Phase
            <span>→</span>
          </Link>

          <Link
            to="/"
            className="high-school-secondary-button"
          >
            Back to Home
          </Link>

        </div>

      </section>

      {/* =====================================
          FET CARD
      ====================================== */}

      <section className="high-school-section">

        <div className="high-school-section-heading">

          <p>
            FURTHER EDUCATION AND TRAINING
          </p>

          <h2>
            The FET Phase
          </h2>

          <span>
            Grades 10, 11 and 12
          </span>

        </div>

        <div className="fet-overview-card">

          <div className="fet-overview-icon">
            🎓
          </div>

          <div className="fet-overview-content">

            <p className="fet-overview-label">
              FET PHASE
            </p>

            <h3>
              Grades 10 – 12
            </h3>

            <p>
              Explore subjects, examinations and past papers
              for learners in the Further Education and Training
              phase.
            </p>

            <Link
              to="/high-school/fet"
              className="fet-overview-button"
            >
              View FET Phase
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================
          INFORMATION
      ====================================== */}

      <section className="high-school-info-section">

        <div className="high-school-info-card">

          <div className="high-school-info-icon">
            📚
          </div>

          <div>

            <h2>
              Prepare for your next assessment
            </h2>

            <p>
              Choose your grade, select a subject and
              explore available past papers. The platform
              will eventually allow you to filter resources
              by subject, year, term and examination.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================
          BACK
      ====================================== */}

      <section className="high-school-back-section">

        <Link
          to="/"
          className="high-school-back"
        >
          ← Back to Home
        </Link>

      </section>

    </div>
  );
}

export default HighSchool;