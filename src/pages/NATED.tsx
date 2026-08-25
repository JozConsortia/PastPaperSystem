import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./TVETDivision.css";

const programmeTypes = [
  {
    id: "engineering",
    title: "Engineering Studies",
    description:
      "Explore engineering-related Report 191 programmes and their N-level subjects.",
    icon: "⚙️",
  },
  {
    id: "business",
    title: "Business Studies",
    description:
      "Explore business and management-related Report 191 programmes.",
    icon: "💼",
  },
  {
    id: "general",
    title: "General Studies",
    description:
      "Explore other Report 191 programmes outside the main engineering pathway.",
    icon: "📚",
  },
];

function NATED() {
  return (
    <div className="tvet-division-page">

      <header className="tvet-division-header">
        <Navbar />
      </header>

      <section className="tvet-division-hero">

        <p>
          TVET COLLEGE · REPORT 191
        </p>

        <h1>
          NATED
          <span>
            Report 191
          </span>
        </h1>

        <p>
          Choose a programme type to continue to
          NATED subjects, levels and past papers.
        </p>

      </section>

      <main className="tvet-division-main">

        <div className="tvet-division-heading">

          <div>

            <p>
              PROGRAMME TYPES
            </p>

            <h2>
              Choose a programme type
            </h2>

          </div>

          <span>
            Report 191 / NATED
          </span>

        </div>

        <div className="tvet-programme-grid">

          {programmeTypes.map((programme) => (

            <Link
              key={programme.id}
              to={`/tvet/nated/${programme.id}`}
              className="tvet-programme-card"
            >

              <div className="tvet-programme-top">

                <div className="tvet-programme-icon">
                  {programme.icon}
                </div>

              </div>

              <p>
                REPORT 191
              </p>

              <h3>
                {programme.title}
              </h3>

              <span>
                {programme.description}
              </span>

              <div className="tvet-level-action">
                <span>
                  Explore
                </span>

                <b>
                  →
                </b>
              </div>

            </Link>

          ))}

        </div>

        <div className="tvet-division-back">

          <Link to="/tvet">
            ← Back to TVET College
          </Link>

        </div>

      </main>

    </div>
  );
}

export default NATED;