import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ncvLevels, ncvProgrammes } from "../data/tvetData";
import "./TVETDivision.css";

function NCV() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedLevel =
    searchParams.get("level") || "all";

  const filteredProgrammes =
    selectedLevel === "all"
      ? ncvProgrammes
      : ncvProgrammes.filter((programme) =>
          programme.levels?.includes(selectedLevel)
        );

  return (
    <div className="tvet-division-page">

      <header className="tvet-division-header">
        <Navbar />
      </header>

      {/* HERO */}

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
          Choose an NC(V) level or browse the full
          vocational programme catalogue.
        </p>

      </section>

      <main className="tvet-division-main">

        {/* HEADING */}

        <div className="tvet-division-heading">

          <div>

            <p>
              NC(V) PROGRAMMES
            </p>

            <h2>
              Choose your level
            </h2>

          </div>

          <span>
            {filteredProgrammes.length} programmes
          </span>

        </div>

        {/* LEVEL FILTER */}

        <div className="tvet-filter-row">

          <button
            type="button"
            className={
              selectedLevel === "all"
                ? "tvet-filter active"
                : "tvet-filter"
            }
            onClick={() => {
              setSearchParams({});
            }}
          >
            All Levels
          </button>

          {ncvLevels.map((level) => (

            <button
              key={level.id}
              type="button"
              className={
                selectedLevel === level.id
                  ? "tvet-filter active"
                  : "tvet-filter"
              }
              onClick={() => {
                setSearchParams({
                  level: level.id,
                });
              }}
            >
              Level {level.id}
            </button>

          ))}

        </div>

        {/* PROGRAMMES */}

        <div className="tvet-course-grid">

          {filteredProgrammes.map((programme) => (

            <Link
              key={programme.id}
              to={`/tvet/ncv/${programme.id}`}
              className="tvet-course-card"
            >

              <div className="tvet-course-top">

                <div className="tvet-course-icon">
                  📚
                </div>

                <span>
                  NC(V)
                </span>

              </div>

              <p className="tvet-course-category">
                {programme.category}
              </p>

              <h3>
                {programme.name}
              </h3>

              <p>
                {programme.description}
              </p>

              <div className="tvet-course-levels">

                {programme.levels?.map((level) => (

                  <span key={level}>
                    Level {level}
                  </span>

                ))}

              </div>

              <div className="tvet-course-action">

                <span>
                  Explore programme
                </span>

                <b>
                  →
                </b>

              </div>

            </Link>

          ))}

        </div>

        {/* BACK */}

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