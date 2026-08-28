import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  qualificationTypes,
  universities,
} from "../data/universityData";
import "./University.css";

function UniversityQualifications() {
  const { universityId } = useParams();

  const university = universityId
    ? universities.find(
        (item) => item.id === universityId
      )
    : null;

  const backPath = university
    ? `/university/${university.id}`
    : "/university";

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
          Qualification
          <span>
            types.
          </span>
        </h1>

        <p>
          Choose the type of qualification you are
          looking for before moving to programmes
          and modules.
        </p>

      </section>

      <main className="university-main">

        <div className="university-section-heading">

          <div>

            <p>
              HEQSF
            </p>

            <h2>
              Choose a qualification
            </h2>

          </div>

          <span>
            NQF Levels 5 – 10
          </span>

        </div>

        <div className="university-qualification-grid">

          {qualificationTypes.map(
            (qualification) => (

              <Link
                key={qualification.id}
                to={
                  university
                    ? `/university/${university.id}/qualification/${qualification.id}`
                    : `/university/qualification/${qualification.id}`
                }
                className="university-qualification-card"
              >

                <div className="university-qualification-level">
                  {qualification.level}
                </div>

                <h3>
                  {qualification.name}
                </h3>

                <p>
                  {qualification.description}
                </p>

                <span>
                  Explore →
                </span>

              </Link>

            )
          )}

        </div>

        <div className="university-back">

          <Link to={backPath}>
            ← Back
          </Link>

        </div>

      </main>

    </div>
  );
}

export default UniversityQualifications;