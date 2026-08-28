import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  studyAreas,
  universities,
} from "../data/universityData";
import "./University.css";

function UniversityStudyAreas() {
  const { universityId } = useParams();

  const university = universityId
    ? universities.find(
        (item) => item.id === universityId
      )
    : null;

  return (
    <div className="university-page">

      <header className="university-header">
        <Navbar />
      </header>

      <section className="university-hero compact">

        <p className="university-label">
          {university
            ? university.abbreviation
            : "HIGHER EDUCATION"}
        </p>

        <h1>
          Study
          <span>
            areas.
          </span>
        </h1>

        <p>
          Start with the field you are studying and
          continue to the qualification and module level.
        </p>

      </section>

      <main className="university-main">

        <div className="university-section-heading">

          <div>

            <p>
              STUDY AREAS
            </p>

            <h2>
              What are you studying?
            </h2>

          </div>

          <span>
            Browse by academic field
          </span>

        </div>

        <div className="university-study-grid large">

          {studyAreas.map(
            (area) => (

              <Link
                key={area.id}
                to={
                  university
                    ? `/university/${university.id}/study-area/${area.id}`
                    : `/university/study-area/${area.id}`
                }
                className="university-study-card"
              >

                <div className="university-study-icon">
                  📚
                </div>

                <h3>
                  {area.name}
                </h3>

                <p>
                  {area.description}
                </p>

                <span>
                  Explore area →
                </span>

              </Link>

            )
          )}

        </div>

        <div className="university-back">

          <Link
            to={
              university
                ? `/university/${university.id}`
                : "/university"
            }
          >
            ← Back
          </Link>

        </div>

      </main>

    </div>
  );
}

export default UniversityStudyAreas;