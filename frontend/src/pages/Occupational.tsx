import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import {
  occupationalCategories,
} from "../data/tvetData";

import "./TVETDivision.css";

function Occupational() {
  return (
    <div className="tvet-division-page">

      <header className="tvet-division-header">
        <Navbar />
      </header>

      {/* HERO */}

      <section className="tvet-division-hero">

        <p>
          TVET COLLEGE · WORKPLACE-ALIGNED
        </p>

        <h1>
          Occupational
          <span>
            Programmes
          </span>
        </h1>

        <p>
          Explore workplace-aligned occupational
          qualifications and skills programmes.
        </p>

      </section>

      <main className="tvet-division-main">

        {/* HEADING */}

        <div className="tvet-division-heading">

          <div>

            <p>
              OCCUPATIONAL LEARNING
            </p>

            <h2>
              Choose a category
            </h2>

          </div>

          <span>
            2026 programme structure
          </span>

        </div>

        {/* CATEGORIES */}

        <div className="tvet-programme-grid">

          {occupationalCategories.map(
            (category) => (

              <Link
                key={category.id}
                to={`/tvet/occupational/${category.id}`}
                className="tvet-programme-card"
              >

                <div className="tvet-programme-top">

                  <div className="tvet-programme-icon">
                    {category.icon}
                  </div>

                </div>

                <p>
                  OCCUPATIONAL
                </p>

                <h3>
                  {category.name}
                </h3>

                <span>
                  {category.description}
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

            )
          )}

        </div>

        {/* IMPORTANT INFORMATION */}

        <section className="tvet-occupational-note">

          <div className="tvet-note-icon">
            ℹ️
          </div>

          <div>

            <h2>
              Programme availability varies by college
            </h2>

            <p>
              DHET publishes an updated list of occupational
              programmes and the colleges offering them.
              We will connect this page to that official
              catalogue so that PastPaperHub does not
              advertise a programme at a college where it
              is not actually offered.
            </p>

          </div>

        </section>

        <div className="tvet-division-back">

          <Link to="/tvet">
            ← Back to TVET College
          </Link>

        </div>

      </main>

    </div>
  );
}

export default Occupational;