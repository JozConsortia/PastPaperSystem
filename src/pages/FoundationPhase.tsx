import { Link } from "react-router-dom";
import "./FoundationPhase.css";

const grades = [
  {
    number: 1,
    description:
      "Explore Grade 1 past papers, tests and learning resources.",
  },
  {
    number: 2,
    description:
      "Explore Grade 2 past papers, tests and learning resources.",
  },
  {
    number: 3,
    description:
      "Explore Grade 3 past papers, tests and learning resources.",
  },
];

function FoundationPhase() {
  return (
    <div className="foundation-page">
      <header className="foundation-header">
        <Link to="/primary">← Primary School</Link>
      </header>

      <main>
        <section className="foundation-hero">
          <p>FOUNDATION PHASE</p>

          <h1>
            Grades 1 – 3
            <span>Past Papers</span>
          </h1>

          <p>
            Select your grade to find subjects and available past
            papers.
          </p>
        </section>

        <section className="grades-section">
          <h2>Select your grade</h2>

          <div className="grades-grid">
            {grades.map((grade) => (
              <Link
                key={grade.number}
                to={`/primary/foundation-phase/grade/${grade.number}`}
                className="grade-card"
              >
                <div className="grade-icon">
                  {grade.number}
                </div>

                <h3>Grade {grade.number}</h3>

                <p>{grade.description}</p>

                <strong>View Grade →</strong>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default FoundationPhase;