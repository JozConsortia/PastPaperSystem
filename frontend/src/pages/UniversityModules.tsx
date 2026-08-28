import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  universities,
  universityModules,
} from "../data/universityData";
import "./University.css";

function UniversityModules() {
  const { universityId, studyAreaId } =
    useParams();

  const university = universityId
    ? universities.find(
        (item) => item.id === universityId
      )
    : null;

  const modules = universityModules;

  return (
    <div className="university-page">

      <header className="university-header">
        <Navbar />
      </header>

      <section className="university-hero compact">

        <p className="university-label">
          {university
            ? university.abbreviation
            : "UNIVERSITY"}
        </p>

        <h1>
          Module
          <span>
            resources.
          </span>
        </h1>

        <p>
          Find modules by module code and academic level.
        </p>

      </section>

      <main className="university-main">

        <div className="university-section-heading">

          <div>

            <p>
              MODULES
            </p>

            <h2>
              Available modules
            </h2>

          </div>

          <span>
            {studyAreaId
              ? "Filtered by study area"
              : "University resources"}
          </span>

        </div>

        <div className="university-module-grid">

          {modules.map(
            (module) => (

              <Link
                key={module.id}
                to={`/university/${universityId || "general"}/module/${module.id}`}
                className="university-module-card"
              >

                <div className="university-module-top">

                  <span>
                    {module.code}
                  </span>

                  <small>
                    {module.level}
                  </small>

                </div>

                <h3>
                  {module.name}
                </h3>

                <p>
                  {module.description}
                </p>

                <div className="university-module-action">
                  View past papers →
                </div>

              </Link>

            )
          )}

        </div>

        <div className="university-demo-note">

          <strong>
            Demo module data
          </strong>

          <span>
            These module examples are placeholders for
            your actual institution-specific module database.
          </span>

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

export default UniversityModules;