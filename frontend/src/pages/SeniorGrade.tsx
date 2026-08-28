import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./SeniorGrade.css";

interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  languageBased?: boolean;
  creativeArts?: boolean;
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
    id: "natural-sciences",
    name: "Natural Sciences",
    icon: "🔬",
    description:
      "Natural Sciences assessments and examinations.",
  },
  {
    id: "social-sciences",
    name: "Social Sciences",
    icon: "🌍",
    description:
      "History, Geography and Social Sciences resources.",
  },
  {
    id: "technology",
    name: "Technology",
    icon: "🛠️",
    description:
      "Technology assessments and examinations.",
  },
  {
    id: "economic-management-sciences",
    name: "Economic & Management Sciences",
    icon: "💼",
    description:
      "EMS assessments, tests and examinations.",
  },
  {
    id: "life-orientation",
    name: "Life Orientation",
    icon: "🧭",
    description:
      "Life Orientation assessments and resources.",
  },
  {
    id: "creative-arts",
    name: "Creative Arts",
    icon: "🎨",
    description:
      "Dance, Drama, Music and Visual Arts.",
    creativeArts: true,
  },
];

function SeniorGrade() {
  const { gradeNumber } = useParams();

  const validGrades = ["7", "8", "9"];

  if (!validGrades.includes(gradeNumber ?? "")) {
    return (
      <div className="senior-grade-page">
        <Navbar />

        <main className="senior-error">
          <div className="senior-error-card">
            <div className="senior-error-icon">
              !
            </div>

            <h1>
              Grade not found
            </h1>

            <p>
              Only Grades 7, 8 and 9 are available
              in the Senior Phase.
            </p>

            <Link to="/primary/phases/senior">
              Back to Senior Phase
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="senior-grade-page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="senior-grade-hero">
          <div className="senior-grade-hero-inner">
            <p className="senior-grade-eyebrow">
              SENIOR PHASE
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

        {/* SUBJECTS */}
        <section className="senior-subject-section">
          <div className="senior-subject-heading">
            <div>
              <p>
                GRADE {gradeNumber}
              </p>

              <h2>
                Choose a subject
              </h2>
            </div>

            <Link to="/primary/phases/senior">
              ← Senior Phase
            </Link>
          </div>

          <div className="senior-subject-grid">
            {subjects.map((subject) => {
              const destination = subject.languageBased
                ? `/primary/phases/senior/grade/${gradeNumber}/language/${subject.id}`
                : subject.creativeArts
                ? `/primary/phases/senior/grade/${gradeNumber}/creative-arts`
                : `/primary/phases/senior/grade/${gradeNumber}/${subject.id}`;

              return (
                <Link
                  key={subject.id}
                  to={destination}
                  className="senior-subject-card"
                >
                  <div className="senior-subject-top">
                    <div className="senior-subject-icon">
                      {subject.icon}
                    </div>

                    {subject.languageBased && (
                      <span className="senior-language-badge">
                        Language
                      </span>
                    )}

                    {subject.creativeArts && (
                      <span className="senior-arts-badge">
                        4 Disciplines
                      </span>
                    )}
                  </div>

                  <h3>
                    {subject.name}
                  </h3>

                  <p>
                    {subject.description}
                  </p>

                  <div className="senior-subject-action">
                    <span>
                      {subject.languageBased
                        ? "Choose language"
                        : subject.creativeArts
                        ? "Choose discipline"
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

        {/* CREATIVE ARTS */}
        <section className="senior-info-section">
          <div className="senior-info-card">
            <div className="senior-info-icon">
              🎨
            </div>

            <div>
              <h2>
                Creative Arts
              </h2>

              <p>
                Creative Arts can be filtered by discipline:
              </p>

              <div className="senior-arts-list">
                <span>
                  💃 Dance
                </span>

                <span>
                  🎭 Drama
                </span>

                <span>
                  🎵 Music
                </span>

                <span>
                  🖼️ Visual Arts
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SeniorGrade;