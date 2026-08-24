import { Link, useParams } from "react-router-dom";
import "./Grade.css";

const subjects = [
  {
    id: "mathematics",
    name: "Mathematics",
    icon: "🔢",
  },
  {
    id: "home-language",
    name: "Home Language",
    icon: "📚",
  },
  {
    id: "first-additional-language",
    name: "First Additional Language",
    icon: "🗣",
  },
  {
    id: "life-skills",
    name: "Life Skills",
    icon: "🌱",
  },
];

function Grade() {
  const { gradeNumber } = useParams();

  const grade = Number(gradeNumber);

  if (![1, 2, 3].includes(grade)) {
    return (
      <div className="grade-error">
        <h1>Grade not found</h1>
        <Link to="/primary/foundation-phase">
          Back to Foundation Phase
        </Link>
      </div>
    );
  }

  return (
    <div className="grade-page">
      <header className="grade-header">
        <Link to="/primary/foundation-phase">
          ← Foundation Phase
        </Link>
      </header>

      <main>
        <section className="grade-hero">
          <p>FOUNDATION PHASE</p>

          <h1>
            Grade {grade}
            <span>Subjects</span>
          </h1>

          <p>
            Select a subject to find available past papers.
          </p>
        </section>

        <section className="subjects-section">
          <h2>Grade {grade} subjects</h2>

          <div className="subjects-grid">
            {subjects.map((subject) => (
              <Link
                key={subject.id}
                to={`/primary/foundation-phase/grade/${grade}/${subject.id}`}
                className="subject-card"
              >
                <div className="subject-icon">
                  {subject.icon}
                </div>

                <h3>{subject.name}</h3>

                <p>
                  View Grade {grade} {subject.name} past papers.
                </p>

                <strong>View Papers →</strong>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Grade;