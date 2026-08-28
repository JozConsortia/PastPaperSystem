import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./IntermediateGrade.css";

interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  languageBased?: boolean;
}

const subjects: Subject[] = [
  {
    id: "home-language",
    name: "Home Language",
    icon: "📚",
    description:
      "Home Language past papers and assessments.",
    languageBased: true,
  },
  {
    id: "first-additional-language",
    name: "First Additional Language",
    icon: "🗣️",
    description:
      "First Additional Language past papers and assessments.",
    languageBased: true,
  },
  {
    id: "mathematics",
    name: "Mathematics",
    icon: "🔢",
    description:
      "Mathematics tests, assessments and examinations.",
  },
  {
    id: "natural-sciences-technology",
    name: "Natural Sciences & Technology",
    icon: "🔬",
    description:
      "Natural Sciences and Technology assessments.",
  },
  {
    id: "social-sciences",
    name: "Social Sciences",
    icon: "🌍",
    description:
      "History, Geography and Social Sciences resources.",
  },
  {
    id: "life-skills",
    name: "Life Skills",
    icon: "🌱",
    description:
      "Life Skills resources for Intermediate Phase learners.",
  },
];

function IntermediateGrade() {
  const { gradeNumber } = useParams();

  const validGrades = ["4", "5", "6"];

  if (!validGrades.includes(gradeNumber ?? "")) {
    return (
      <div className="intermediate-grade-page">
        <Navbar />

        <main className="intermediate-error">
          <div className="intermediate-error-card">
            <div className="intermediate-error-icon">
              !
            </div>

            <h1>
              Grade not found
            </h1>

            <p>
              Only Grades 4, 5 and 6 are available
              in the Intermediate Phase.
            </p>

            <Link to="/primary/phases/intermediate">
              Back to Intermediate Phase
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="intermediate-grade-page">
      <Navbar />

      <main>
        <section className="intermediate-grade-hero">
          <div className="intermediate-grade-hero-inner">
            <p className="intermediate-grade-eyebrow">
              INTERMEDIATE PHASE
            </p>

            <h1>
              Grade {gradeNumber}
              <span>Subjects</span>
            </h1>

            <p>
              Select a subject to find Grade {gradeNumber}
              past papers and assessments.
            </p>
          </div>
        </section>

        <section className="intermediate-subject-section">
          <div className="intermediate-subject-heading">
            <div>
              <p>
                GRADE {gradeNumber}
              </p>

              <h2>
                Choose a subject
              </h2>
            </div>

            <Link to="/primary/phases/intermediate">
              ← Intermediate Phase
            </Link>
          </div>

          <div className="intermediate-subject-grid">
            {subjects.map((subject) => {
              const destination =
                subject.languageBased
                  ? `/primary/phases/intermediate/grade/${gradeNumber}/language/${subject.id}`
                  : `/primary/phases/intermediate/grade/${gradeNumber}/${subject.id}`;

              return (
                <Link
                  key={subject.id}
                  to={destination}
                  className="intermediate-subject-card"
                >
                  <div className="intermediate-subject-top">
                    <div className="intermediate-subject-icon">
                      {subject.icon}
                    </div>

                    {subject.languageBased && (
                      <span>
                        Language
                      </span>
                    )}
                  </div>

                  <h3>
                    {subject.name}
                  </h3>

                  <p>
                    {subject.description}
                  </p>

                  <div className="intermediate-subject-action">
                    <span>
                      {subject.languageBased
                        ? "Choose language"
                        : "View papers"}
                    </span>

                    <strong>
                      →
                    </strong>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="intermediate-info-section">
          <div className="intermediate-info-card">
            <div className="intermediate-info-icon">
              🌱
            </div>

            <div>
              <h2>
                Life Skills
              </h2>

              <p>
                Life Skills is included as an Intermediate Phase subject.
                Its learning areas can be expanded later as the paper
                database grows.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default IntermediateGrade;