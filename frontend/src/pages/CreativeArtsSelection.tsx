import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./CreativeArtsSelection.css";

const disciplines = [
  {
    id: "dance",
    name: "Dance",
    icon: "💃",
    description:
      "Grade 7 Dance assessments and resources.",
  },
  {
    id: "drama",
    name: "Drama",
    icon: "🎭",
    description:
      "Grade 7 Drama assessments and resources.",
  },
  {
    id: "music",
    name: "Music",
    icon: "🎵",
    description:
      "Grade 7 Music assessments and resources.",
  },
  {
    id: "visual-arts",
    name: "Visual Arts",
    icon: "🖼️",
    description:
      "Grade 7 Visual Arts assessments and resources.",
  },
];

function CreativeArtsSelection() {
  const { subjectId } = useParams();

  return (
    <div className="creative-selection-page">
      <Navbar />

      <main>
        <section className="creative-selection-hero">
          <p>
            GRADE 7
          </p>

          <h1>
            Creative Arts
            <span>Select a discipline</span>
          </h1>

          <p>
            Choose the Creative Arts discipline you want to explore.
          </p>
        </section>

        <section className="creative-selection-section">
          <div className="creative-selection-heading">
            <p>
              CREATIVE ARTS
            </p>

            <h2>
              Choose a discipline
            </h2>
          </div>

          <div className="creative-selection-grid">
            {disciplines.map(
              (discipline) => (
                <Link
                  key={discipline.id}
                  to={`/primary/phases/senior/grade/7/${subjectId}/${discipline.id}`}
                  className="creative-selection-card"
                >
                  <div className="creative-selection-icon">
                    {discipline.icon}
                  </div>

                  <h3>
                    {discipline.name}
                  </h3>

                  <p>
                    {discipline.description}
                  </p>

                  <strong>
                    View Papers →
                  </strong>
                </Link>
              )
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default CreativeArtsSelection;