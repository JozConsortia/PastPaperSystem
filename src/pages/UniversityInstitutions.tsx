import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { universities } from "../data/universityData";
import "./University.css";

function UniversityInstitutions() {
  return (
    <div className="university-page">

      <header className="university-header">
        <Navbar />
      </header>

      <section className="university-hero compact">

        <p className="university-label">
          HIGHER EDUCATION
        </p>

        <h1>
          Choose your
          <span>
            university.
          </span>
        </h1>

        <p>
          Select the institution where your course,
          qualification or module is offered.
        </p>

      </section>

      <main className="university-main">

        <div className="university-list-heading">

          <div>

            <p>
              PUBLIC UNIVERSITIES
            </p>

            <h2>
              South African institutions
            </h2>

          </div>

          <span>
            {universities.length} institutions
          </span>

        </div>

        <div className="university-institution-grid">

          {universities.map((university) => (

            <Link
              key={university.id}
              to={`/university/${university.id}`}
              className="university-institution-card"
            >

              <div className="university-institution-top">

                <div className="university-institution-icon">
                  {university.abbreviation.charAt(0)}
                </div>

                <span>
                  {university.abbreviation}
                </span>

              </div>

              <p className="university-institution-type">
                {university.type}
              </p>

              <h3>
                {university.name}
              </h3>

              <p>
                {university.description}
              </p>

              <div className="university-card-action">
                <span>
                  Explore institution
                </span>

                <b>
                  →
                </b>
              </div>

            </Link>

          ))}

        </div>

        <div className="university-back">

          <Link to="/university">
            ← Back to University
          </Link>

        </div>

      </main>

    </div>
  );
}

export default UniversityInstitutions;