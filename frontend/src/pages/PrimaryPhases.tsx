import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./PrimaryPhases.css";

function PrimaryPhases() {
  return (
    <div className="primary-phases-page">
      <Navbar />

      <main>
        <section className="primary-phases-hero">
          <p className="primary-phases-label">
            PRIMARY SCHOOL
          </p>

          <h1>
            Choose a phase
            <span>and find your grade</span>
          </h1>

          <p>
            Explore South African Primary School resources by
            Foundation, Intermediate and Senior Phase.
          </p>
        </section>

        <section className="primary-phases-section">
          <div className="primary-phases-heading">
            <p>PRIMARY SCHOOL PHASES</p>

            <h2>
              Select a phase
            </h2>

            <span>
              Each phase contains its respective grades.
            </span>
          </div>

          <div className="primary-phases-grid">

            {/* FOUNDATION PHASE */}
            <Link
              to="/primary/phases/foundation"
              className="primary-phase-card"
            >
              <div className="primary-phase-icon">
                📚
              </div>

              <div className="primary-phase-number">
                01
              </div>

              <p className="primary-phase-label">
                FOUNDATION PHASE
              </p>

              <h3>
                Grade R – 3
              </h3>

              <p className="primary-phase-description">
                Early learning resources for Grade R,
                Grade 1, Grade 2 and Grade 3.
              </p>

              <div className="primary-phase-grades">
                <span>Grade R</span>
                <span>Grade 1</span>
                <span>Grade 2</span>
                <span>Grade 3</span>
              </div>

              <strong>
                Explore Foundation Phase →
              </strong>
            </Link>

            {/* INTERMEDIATE PHASE */}
            <Link
              to="/primary/phases/intermediate"
              className="primary-phase-card"
            >
              <div className="primary-phase-icon">
                📖
              </div>

              <div className="primary-phase-number">
                02
              </div>

              <p className="primary-phase-label">
                INTERMEDIATE PHASE
              </p>

              <h3>
                Grade 4 – 6
              </h3>

              <p className="primary-phase-description">
                Resources for Grade 4, Grade 5 and Grade 6
                learners.
              </p>

              <div className="primary-phase-grades">
                <span>Grade 4</span>
                <span>Grade 5</span>
                <span>Grade 6</span>
              </div>

              <strong>
                Explore Intermediate Phase →
              </strong>
            </Link>

            {/* SENIOR PHASE */}
            <Link
              to="/primary/phases/senior"
              className="primary-phase-card"
            >
              <div className="primary-phase-icon">
                🎓
              </div>

              <div className="primary-phase-number">
                03
              </div>

              <p className="primary-phase-label">
                SENIOR PHASE
              </p>

              <h3>
                Grade 7
              </h3>

              <p className="primary-phase-description">
                Grade 7 resources and Senior Phase subjects.
              </p>

              <div className="primary-phase-grades">
                <span>Grade 7</span>
              </div>

              <strong>
                Explore Senior Phase →
              </strong>
            </Link>

          </div>
        </section>
      </main>
    </div>
  );
}

export default PrimaryPhases;