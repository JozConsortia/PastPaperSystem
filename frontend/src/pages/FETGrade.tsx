import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import "./FETGrade.css";

const gradeInformation: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "10": {
    title: "Grade 10",
    description:
      "Explore Grade 10 subjects, study resources and past papers.",
  },
  "11": {
    title: "Grade 11",
    description:
      "Find Grade 11 subjects and past papers for revision and preparation.",
  },
  "12": {
    title: "Grade 12",
    description:
      "Prepare for Grade 12 assessments and final school examinations.",
  },
};

function FETGrade() {
  const { gradeNumber } = useParams();

  const grade =
    gradeNumber && gradeInformation[gradeNumber]
      ? gradeInformation[gradeNumber]
      : null;

  if (!grade) {
    return (
      <div className="fet-grade-page">

        <header className="fet-grade-header">
          <Navbar />
        </header>

        <main className="fet-grade-not-found">

          <div className="fet-grade-error-icon">
            !
          </div>

          <p>
            FET PHASE
          </p>

          <h1>
            Grade not found
          </h1>

          <span>
            The selected grade does not exist.
          </span>

          <Link to="/high-school/fet">
            ← Back to FET Phase
          </Link>

        </main>

      </div>
    );
  }

  return (
    <div className="fet-grade-page">

      <header className="fet-grade-header">
        <Navbar />
      </header>

      {/* =====================================
          HERO
      ====================================== */}

      <section className="fet-grade-hero">

        <p>
          FET PHASE
        </p>

        <h1>
          {grade.title}
        </h1>

        <span>
          {grade.description}
        </span>

      </section>

      {/* =====================================
          MAIN
      ====================================== */}

      <main className="fet-grade-main">

        <section className="fet-subject-section">

          <div className="fet-subject-heading">

            <p>
              SUBJECTS
            </p>

            <h2>
              Choose a subject
            </h2>

            <span>
              Select a subject to view its past papers
              and learning resources.
            </span>

          </div>

          <Link
            to={`/high-school/fet/grade/${gradeNumber}/subjects`}
            className="fet-subject-entry"
          >

            <div className="fet-subject-entry-icon">
              📚
            </div>

            <div className="fet-subject-entry-content">

              <p>
                FET SUBJECTS
              </p>

              <h3>
                Browse Grade {gradeNumber} subjects
              </h3>

              <span>
                Choose from languages, mathematics,
                sciences, commerce, humanities,
                technology and other FET subjects.
              </span>

            </div>

            <div className="fet-subject-entry-arrow">
              →
            </div>

          </Link>

        </section>

        {/* =====================================
            NAVIGATION
        ====================================== */}

        <section className="fet-grade-navigation">

          <Link to="/high-school/fet">
            ← Back to FET Phase
          </Link>

          <Link to="/high-school">
            High School
          </Link>

        </section>

      </main>

    </div>
  );
}

export default FETGrade;