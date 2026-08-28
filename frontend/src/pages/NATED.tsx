import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  natedLevels,
  natedProgrammes,
} from "../data/tvetData";
import "./TVETDivision.css";

function NATED() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const selectedLevel =
    searchParams.get("level") || "all";

  const selectedCategory =
    searchParams.get("category") || "all";

  const filteredProgrammes =
    natedProgrammes.filter((programme) => {

      const matchesLevel =
        selectedLevel === "all" ||
        programme.levels.includes(selectedLevel);

      let matchesCategory = true;

      if (selectedCategory === "engineering") {
        matchesCategory =
          programme.id === "engineering-studies";
      }

      if (selectedCategory === "business") {
        matchesCategory = [
          "business-management",
          "financial-management",
          "human-resource-management",
          "management-assistant",
          "marketing-management",
          "public-management",
          "public-relations",
          "legal-secretary",
          "medical-secretary",
          "labour-relations",
          "mercantile-law",
        ].includes(programme.id);
      }

      if (selectedCategory === "services") {
        matchesCategory = [
          "hospitality-catering-services",
          "tourism-nated",
          "educare",
          "art-and-design",
          "clothing-production",
          "textiles",
          "hair-care",
          "interior-decorating",
          "popular-music-composition",
          "popular-music-performance",
          "popular-music-studio-work",
          "farming-management",
        ].includes(programme.id);
      }

      return (
        matchesLevel &&
        matchesCategory
      );
    });

  return (
    <div className="tvet-division-page">

      <header className="tvet-division-header">
        <Navbar />
      </header>

      {/* HERO */}

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
          Browse Engineering Studies, Business
          Studies and Services/General programmes.
        </p>

      </section>

      <main className="tvet-division-main">

        {/* HEADING */}

        <div className="tvet-division-heading">

          <div>

            <p>
              REPORT 191 PROGRAMMES
            </p>

            <h2>
              Choose a programme
            </h2>

          </div>

          <span>
            {filteredProgrammes.length} programmes
          </span>

        </div>

        {/* CATEGORY FILTERS */}

        <div className="tvet-filter-row">

          <button
            type="button"
            className={
              selectedCategory === "all"
                ? "tvet-filter active"
                : "tvet-filter"
            }
            onClick={() =>
              setSearchParams({})
            }
          >
            All
          </button>

          <button
            type="button"
            className={
              selectedCategory === "engineering"
                ? "tvet-filter active"
                : "tvet-filter"
            }
            onClick={() =>
              setSearchParams({
                category: "engineering",
              })
            }
          >
            Engineering Studies
          </button>

          <button
            type="button"
            className={
              selectedCategory === "business"
                ? "tvet-filter active"
                : "tvet-filter"
            }
            onClick={() =>
              setSearchParams({
                category: "business",
              })
            }
          >
            Business Studies
          </button>

          <button
            type="button"
            className={
              selectedCategory === "services"
                ? "tvet-filter active"
                : "tvet-filter"
            }
            onClick={() =>
              setSearchParams({
                category: "services",
              })
            }
          >
            Services
          </button>

        </div>

        {/* LEVEL FILTER */}

        <div className="tvet-filter-row secondary">

          {natedLevels.map((level) => (

            <button
              key={level}
              type="button"
              className={
                selectedLevel === level
                  ? "tvet-filter active"
                  : "tvet-filter"
              }
              onClick={() => {

                const nextParams =
                  new URLSearchParams(
                    searchParams
                  );

                nextParams.set(
                  "level",
                  level
                );

                setSearchParams(
                  nextParams
                );

              }}
            >
              {level}
            </button>

          ))}

        </div>

        {/* PROGRAMMES */}

        <div className="tvet-course-grid">

          {filteredProgrammes.map((programme) => (

            <Link
              key={programme.id}
              to={`/tvet/nated/${programme.id}`}
              className="tvet-course-card"
            >

              <div className="tvet-course-top">

                <div className="tvet-course-icon">
                  🛠️
                </div>

                <span>
                  NATED
                </span>

              </div>

              <p className="tvet-course-category">
                REPORT 191
              </p>

              <h3>
                {programme.name}
              </h3>

              <p>
                {programme.description}
              </p>

              <div className="tvet-course-levels">

                {programme.levels.map(
                  (level) => (

                    <span key={level}>
                      {level}
                    </span>

                  )
                )}

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