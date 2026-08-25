import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./TVETDivision.css";

const categories = [
  {
    id: "occupational-qualifications",
    title: "Occupational Qualifications",
    description:
      "Explore workplace-aligned occupational qualifications offered through the TVET sector.",
    icon: "🎯",
  },
  {
    id: "skills-programmes",
    title: "Skills Programmes",
    description:
      "Explore vocational and skills-focused programmes offered through TVET colleges.",
    icon: "🛠️",
  },
];

function Occupational() {
  return (
    <div className="tvet-division-page">

      <header className="tvet-division-header">
        <Navbar />
      </header>

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
          Explore occupational learning and
          workplace-aligned programme resources.
        </p>

      </section>

      <main className="tvet-division-main">

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
            Workplace-aligned learning
          </span>

        </div>

        <div className="tvet-programme-grid">

          {categories.map((category) => (

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
                {category.title}
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

export default Occupational;