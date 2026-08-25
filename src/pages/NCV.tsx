import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./TVETDivision.css";

const levels = [
  {
    number: "2",
    title: "NC(V) Level 2",
    description:
      "Explore Level 2 vocational programmes, subjects and assessment resources.",
  },
  {
    number: "3",
    title: "NC(V) Level 3",
    description:
      "Explore Level 3 vocational programmes, subjects and assessment resources.",
  },
  {
    number: "4",
    title: "NC(V) Level 4",
    description:
      "Explore Level 4 vocational programmes, subjects and assessment resources.",
  },
];

function NCV() {
  return (
    <div className="tvet-division-page">

      <header className="tvet-division-header">
        <Navbar />
      </header>

      <section className="tvet-division-hero">

        <p>
          TVET COLLEGE · NATIONAL CERTIFICATE
        </p>

        <h1>
          NC(V)
          <span>
            Levels 2 – 4
          </span>
        </h1>

        <p>
          Choose an NC(V) level to explore the
          programmes and subjects available at that level.
        </p>

      </section>

      <main className="tvet-division-main">

        <div className="tvet-division-heading">

          <div>

            <p>
              NC(V) LEVELS
            </p>

            <h2>
              Choose a level
            </h2>

          </div>

          <span>
            National Certificate (Vocational)
          </span>

        </div>

        <div className="tvet-level-grid">

          {levels.map((level) => (

            <Link
              key={level.number}
              to={`/tvet/ncv/level/${level.number}`}
              className="tvet-level-card"
            >

              <div className="tvet-level-top">

                <div className="tvet-level-icon">
                  {level.number}
                </div>

                <span>
                  NC(V)
                </span>

              </div>

              <p className="tvet-level-label">
                NATIONAL CERTIFICATE (VOCATIONAL)
              </p>

              <h3>
                {level.title}
              </h3>

              <p className="tvet-level-description">
                {level.description}
              </p>

              <div className="tvet-level-action">
                <span>
                  Explore Level {level.number}
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

export default NCV;