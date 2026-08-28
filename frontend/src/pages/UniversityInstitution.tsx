import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  studyAreas,
  qualificationTypes,
  universities,
} from "../data/universityData";
import "./University.css";

function UniversityInstitution() {
  const { universityId } = useParams();

  const university = universities.find(
    (item) => item.id === universityId
  );

  if (!university) {
    return (
      <div className="university-page">

        <header className="university-header">
          <Navbar />
        </header>

        <main className="university-error">

          <div>
            !
          </div>

          <p>
            UNIVERSITY
          </p>

          <h1>
            Institution not found
          </h1>

          <span>
            The selected university could not be found.
          </span>

          <Link to="/university/institutions">
            ← Back to Universities
          </Link>

        </main>

      </div>
    );
  }

  return (
    <div className="university-page">

      <header className="university-header">
        <Navbar />
      </header>

      <section className="university-institution-hero">

        <div className="university-institution-large-icon">
          {university.abbreviation}
        </div>

        <p>
          {university.type}
        </p>

        <h1>
          {university.name}
        </h1>

        <span>
          {university.description}
        </span>

      </section>

      <main className="university-main">

        <div className="university-breadcrumb">

          <Link to="/university">
            University
          </Link>

          <span>
            /
          </span>

          <Link to="/university/institutions">
            Institutions
          </Link>

          <span>
            /
          </span>

          <strong>
            {university.abbreviation}
          </strong>

        </div>

        {/* =====================================
            OPTIONS
        ====================================== */}

        <div className="university-section-heading">

          <div>

            <p>
              EXPLORE
            </p>

            <h2>
              What are you studying?
            </h2>

          </div>

          <p>
            Start with qualification or study area,
            then continue to the modules available.
          </p>

        </div>

        <div className="university-choice-grid">

          <Link
            to={`/university/${university.id}/qualifications`}
            className="university-choice-card"
          >

            <div className="university-feature-icon">
              🎓
            </div>

            <h3>
              Qualifications
            </h3>

            <p>
              Browse certificates, diplomas,
              bachelor's and postgraduate qualifications.
            </p>

            <strong>
              Browse qualifications →
            </strong>

          </Link>

          <Link
            to={`/university/${university.id}/study-areas`}
            className="university-choice-card"
          >

            <div className="university-feature-icon">
              📚
            </div>

            <h3>
              Study Areas
            </h3>

            <p>
              Start with areas such as IT, engineering,
              business, health, law and humanities.
            </p>

            <strong>
              Browse study areas →
            </strong>

          </Link>

        </div>

        {/* =====================================
            COMMON STUDY AREAS
        ====================================== */}

        <div className="university-section-heading sub">

          <div>

            <p>
              STUDY AREAS
            </p>

            <h2>
              Browse by field
            </h2>

          </div>

        </div>

        <div className="university-study-grid">

          {studyAreas.map((area) => (

            <Link
              key={area.id}
              to={`/university/${university.id}/study-area/${area.id}`}
              className="university-study-card"
            >

              <div>
                📚
              </div>

              <h3>
                {area.name}
              </h3>

              <p>
                {area.description}
              </p>

              <span>
                Explore →
              </span>

            </Link>

          ))}

        </div>

        {/* =====================================
            QUALIFICATION LEVELS
        ====================================== */}

        <div className="university-quick-section">

          <div>

            <p>
              QUALIFICATION LEVELS
            </p>

            <h2>
              Higher education pathways
            </h2>

          </div>

          <div className="university-quick-grid">

            {qualificationTypes.slice(0, 5).map(
              (qualification) => (

                <div
                  key={qualification.id}
                  className="university-quick-card"
                >

                  <strong>
                    {qualification.level}
                  </strong>

                  <span>
                    {qualification.name}
                  </span>

                </div>

              )
            )}

          </div>

        </div>

        <div className="university-back">

          <Link to="/university/institutions">
            ← Back to Universities
          </Link>

        </div>

      </main>

    </div>
  );
}

export default UniversityInstitution;