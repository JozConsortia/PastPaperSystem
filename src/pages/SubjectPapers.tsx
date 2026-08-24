import { Link, useParams } from "react-router-dom";
import "./SubjectPapers.css";

const subjectNames: Record<string, string> = {
  mathematics: "Mathematics",
  "home-language": "Home Language",
  "first-additional-language":
    "First Additional Language",
  "life-skills": "Life Skills",
};

const papers = [
  {
    id: "paper-001",
    title: "Term 1 Test",
    year: 2025,
    term: "Term 1",
    type: "Test",
  },
  {
    id: "paper-002",
    title: "Term 2 Examination",
    year: 2025,
    term: "Term 2",
    type: "Examination",
  },
  {
    id: "paper-003",
    title: "Term 3 Test",
    year: 2024,
    term: "Term 3",
    type: "Test",
  },
];

function SubjectPapers() {
  const { gradeNumber, subjectId } = useParams();

  const subjectName =
    subjectNames[subjectId ?? ""] ?? "Subject";

  return (
    <div className="papers-page">
      <header className="papers-header">
        <Link
          to={`/primary/foundation-phase/grade/${gradeNumber}`}
        >
          ← Grade {gradeNumber}
        </Link>
      </header>

      <main>
        <section className="papers-hero">
          <p>GRADE {gradeNumber}</p>

          <h1>
            {subjectName}
            <span>Past Papers</span>
          </h1>

          <p>
            Find tests and examination papers for Grade{" "}
            {gradeNumber}.
          </p>
        </section>

        <section className="papers-section">
          <div className="papers-filter">
            <select defaultValue="all">
              <option value="all">All Years</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>

            <select defaultValue="all">
              <option value="all">All Terms</option>
              <option value="Term 1">Term 1</option>
              <option value="Term 2">Term 2</option>
              <option value="Term 3">Term 3</option>
              <option value="Term 4">Term 4</option>
            </select>

            <select defaultValue="all">
              <option value="all">All Types</option>
              <option value="Test">Test</option>
              <option value="Examination">Examination</option>
            </select>
          </div>

          <div className="paper-list">
            {papers.map((paper) => (
              <article
                key={paper.id}
                className="paper-card"
              >
                <div className="paper-file">
                  PDF
                </div>

                <div className="paper-info">
                  <h3>{paper.title}</h3>

                  <p>
                    Grade {gradeNumber} • {subjectName}
                  </p>

                  <span>
                    {paper.year} • {paper.term} •{" "}
                    {paper.type}
                  </span>
                </div>

                <Link
                  to={`/paper/${paper.id}`}
                  className="view-paper"
                >
                  View Paper →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default SubjectPapers;