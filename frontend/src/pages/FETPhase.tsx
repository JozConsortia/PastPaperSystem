import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import "./FETPhase.css";

const grades = [
  {
    number: "10",
    title: "Grade 10",
    description:
      "Explore Grade 10 subjects, learning resources and past papers.",
  },
  {
    number: "11",
    title: "Grade 11",
    description:
      "Find Grade 11 subjects and past papers to support revision and preparation.",
  },
  {
    number: "12",
    title: "Grade 12",
    description:
      "Prepare for Grade 12 assessments and final school examinations.",
  },
];

function FETPhase() {
  return (
    <div className="fet-page">

      {/* =====================================
          NAVIGATION
      ====================================== */}

      <header className="fet-header">
        <Navbar />
      </header>

      {/* =====================================
          HERO
      ====================================== */}

      <section className="fet-hero">

        <p className="fet-label">
          FURTHER EDUCATION AND TRAINING
        </p>

        <h1>
          Grades 10 – 12
          <span>FET Phase.</span>
        </h1>

        <p>
          Select your grade to explore subjects,
          examination resources and past papers for
          the Further Education and Training phase.
        </p>

      </section>

      {/* =====================================
          GRADES
      ====================================== */}

      <section className="fet-grades-section">

        <div className="fet-heading">

          <p>
            SELECT YOUR GRADE
          </p>

          <h2>
            FET Phase grades
          </h2>

          <span>
            Choose a grade to continue to its subjects.
          </span>

        </div>

        <div className="fet-grades-grid">

          {grades.map((grade) => (
            <Link
              key={grade.number}
              to={`/high-school/fet/grade/${grade.number}`}
              className="fet-grade-card"
            >

              <div className="fet-grade-top">

                <div className="fet-grade-icon">
                  {grade.number}
                </div>

                <span>
                  FET
                </span>

              </div>

              <p className="fet-grade-label">
                FURTHER EDUCATION AND TRAINING
              </p>

              <h3>
                {grade.title}
              </h3>

              <p className="fet-grade-description">
                {grade.description}
              </p>

              <div className="fet-grade-action">

                <span>
                  View Grade {grade.number}
                </span>

                <span className="fet-arrow">
                  →
                </span>

              </div>

            </Link>
          ))}

        </div>

      </section>

      {/* =====================================
          INFO
      ====================================== */}

      <section className="fet-info-section">

        <div className="fet-info-card">

          <div className="fet-info-icon">
            🎓
          </div>

          <div>

            <h2>
              Senior school preparation
            </h2>

            <p>
              The FET Phase covers Grades 10, 11 and 12.
              Choose your grade to continue to subjects
              and past papers. Grade 12 resources can be
              used to support final examination preparation.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================
          BACK
      ====================================== */}

      <section className="fet-back-section">

        <Link
          to="/high-school"
          className="fet-back"
        >
          ← Back to High School
        </Link>

      </section>

    </div>
  );
}

export default FETPhase;