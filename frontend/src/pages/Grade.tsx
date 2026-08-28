import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Grade.css";

interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  languageBased?: boolean;
}

const gradeSubjects: Record<string, Subject[]> = {
  R: [
    {
      id: "home-language",
      name: "Home Language",
      icon: "📚",
      description:
        "Home Language learning resources for Grade R.",
      languageBased: true,
    },
    {
      id: "mathematics",
      name: "Mathematics",
      icon: "🔢",
      description:
        "Grade R Mathematics learning resources.",
    },
    {
      id: "life-skills",
      name: "Life Skills",
      icon: "🌱",
      description:
        "Grade R Life Skills learning resources.",
    },
  ],

  "1": [
    {
      id: "home-language",
      name: "Home Language",
      icon: "📚",
      description:
        "Grade 1 Home Language past papers and assessments.",
      languageBased: true,
    },
    {
      id: "first-additional-language",
      name: "First Additional Language",
      icon: "🗣️",
      description:
        "Grade 1 First Additional Language resources.",
      languageBased: true,
    },
    {
      id: "mathematics",
      name: "Mathematics",
      icon: "🔢",
      description:
        "Grade 1 Mathematics past papers and assessments.",
    },
    {
      id: "life-skills",
      name: "Life Skills",
      icon: "🌱",
      description:
        "Grade 1 Life Skills resources.",
    },
  ],

  "2": [
    {
      id: "home-language",
      name: "Home Language",
      icon: "📚",
      description:
        "Grade 2 Home Language past papers and assessments.",
      languageBased: true,
    },
    {
      id: "first-additional-language",
      name: "First Additional Language",
      icon: "🗣️",
      description:
        "Grade 2 First Additional Language resources.",
      languageBased: true,
    },
    {
      id: "mathematics",
      name: "Mathematics",
      icon: "🔢",
      description:
        "Grade 2 Mathematics past papers and assessments.",
    },
    {
      id: "life-skills",
      name: "Life Skills",
      icon: "🌱",
      description:
        "Grade 2 Life Skills resources.",
    },
  ],

  "3": [
    {
      id: "home-language",
      name: "Home Language",
      icon: "📚",
      description:
        "Grade 3 Home Language past papers and assessments.",
      languageBased: true,
    },
    {
      id: "first-additional-language",
      name: "First Additional Language",
      icon: "🗣️",
      description:
        "Grade 3 First Additional Language resources.",
      languageBased: true,
    },
    {
      id: "mathematics",
      name: "Mathematics",
      icon: "🔢",
      description:
        "Grade 3 Mathematics past papers and assessments.",
    },
    {
      id: "life-skills",
      name: "Life Skills",
      icon: "🌱",
      description:
        "Grade 3 Life Skills resources.",
    },
  ],
};

function Grade() {
  const { gradeNumber } = useParams();

  const subjects =
    gradeSubjects[gradeNumber ?? ""];

  if (!subjects) {
    return (
      <div className="grade-page">
        <Navbar />

        <main className="grade-error">
          <div className="grade-error-card">
            <div className="grade-error-icon">
              !
            </div>

            <h1>
              Grade not found
            </h1>

            <p>
              The requested Foundation Phase grade could not be found.
            </p>

            <Link to="/primary/phases/foundation">
              Back to Foundation Phase
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="grade-page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="grade-hero">
          <div className="grade-hero-inner">
            <p className="grade-eyebrow">
              FOUNDATION PHASE
            </p>

            <h1>
              Grade {gradeNumber}
              <span>Subjects</span>
            </h1>

            <p className="grade-hero-description">
              Select a subject to find available past papers,
              assessments and learning resources.
            </p>
          </div>
        </section>

        {/* SUBJECTS */}
        <section className="grade-subject-section">
          <div className="grade-section-heading">
            <div>
              <p>
                GRADE {gradeNumber}
              </p>

              <h2>
                Choose a subject
              </h2>
            </div>

            <Link to="/primary/phases/foundation">
              ← Foundation Phase
            </Link>
          </div>

          <div className="grade-subject-grid">
            {subjects.map((subject) => {
              const destination =
                subject.languageBased
                  ? `/primary/phases/foundation/grade/${gradeNumber}/language/${subject.id}`
                  : `/primary/phases/foundation/grade/${gradeNumber}/${subject.id}`;

              return (
                <Link
                  key={subject.id}
                  to={destination}
                  className="grade-subject-card"
                >
                  <div className="grade-subject-top">
                    <div className="grade-subject-icon">
                      {subject.icon}
                    </div>

                    {subject.languageBased && (
                      <span className="grade-language-badge">
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

                  <div className="grade-subject-action">
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

        {/* FOOTER INFORMATION */}
        <section className="grade-info-section">
          <div className="grade-info-card">
            <div className="grade-info-icon">
              📖
            </div>

            <div>
              <h2>
                Looking for a past paper?
              </h2>

              <p>
                Choose a subject above. Language subjects will ask you
                to select the learner's language before showing papers.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Grade;