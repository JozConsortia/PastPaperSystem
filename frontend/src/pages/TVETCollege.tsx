import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./TVETCollege.css";

function TVETCollege() {
  return (
    <div className="tvet-page">

      {/* =====================================
          NAVIGATION
      ====================================== */}

      <header className="tvet-header">
        <Navbar />
      </header>

      {/* =====================================
          HERO
      ====================================== */}

      <section className="tvet-hero">

        <p className="tvet-label">
          TECHNICAL & VOCATIONAL EDUCATION AND TRAINING
        </p>

        <h1>
          TVET College
          <span>
            Choose your pathway.
          </span>
        </h1>

        <p>
          Explore vocational and technical learning
          resources through the main TVET pathways.
          Choose a pathway to continue to programmes,
          levels and subjects.
        </p>

      </section>

      {/* =====================================
          MAIN
      ====================================== */}

      <main className="tvet-main">

        {/* =====================================
            PATHWAYS
        ====================================== */}

        <section className="tvet-pathway-section">

          <div className="tvet-section-heading">

            <div>

              <p>
                TVET PATHWAYS
              </p>

              <h2>
                Choose a pathway
              </h2>

            </div>

            <span>
              Select one to continue
            </span>

          </div>

          <div className="tvet-pathway-grid">

            {/* =================================
                NC(V)
            ================================== */}

            <Link
              to="/tvet/ncv"
              className="tvet-pathway-card"
            >

              <div className="tvet-pathway-top">

                <div className="tvet-pathway-icon">
                  🎓
                </div>

                <span className="tvet-pathway-number">
                  01
                </span>

              </div>

              <div className="tvet-pathway-content">

                <p>
                  NATIONAL CERTIFICATE
                </p>

                <h3>
                  NC(V)
                </h3>

                <span className="tvet-pathway-level">
                  Levels 2 – 4
                </span>

                <p className="tvet-pathway-description">
                  Explore National Certificate
                  (Vocational) programmes, levels,
                  subjects and assessment resources.
                </p>

              </div>

              <div className="tvet-pathway-button">
                Explore NC(V)

                <span>
                  →
                </span>
              </div>

            </Link>

            {/* =================================
                NATED
            ================================== */}

            <Link
              to="/tvet/nated"
              className="tvet-pathway-card"
            >

              <div className="tvet-pathway-top">

                <div className="tvet-pathway-icon">
                  🛠️
                </div>

                <span className="tvet-pathway-number">
                  02
                </span>

              </div>

              <div className="tvet-pathway-content">

                <p>
                  REPORT 191
                </p>

                <h3>
                  NATED
                </h3>

                <span className="tvet-pathway-level">
                  N-level programmes
                </span>

                <p className="tvet-pathway-description">
                  Explore Report 191 programmes,
                  levels, subjects and available
                  examination resources.
                </p>

              </div>

              <div className="tvet-pathway-button">
                Explore NATED

                <span>
                  →
                </span>
              </div>

            </Link>

            {/* =================================
                OCCUPATIONAL
            ================================== */}

            <Link
              to="/tvet/occupational"
              className="tvet-pathway-card"
            >

              <div className="tvet-pathway-top">

                <div className="tvet-pathway-icon">
                  ⚙️
                </div>

                <span className="tvet-pathway-number">
                  03
                </span>

              </div>

              <div className="tvet-pathway-content">

                <p>
                  WORKPLACE-ALIGNED
                </p>

                <h3>
                  Occupational
                </h3>

                <span className="tvet-pathway-level">
                  Qualifications & Programmes
                </span>

                <p className="tvet-pathway-description">
                  Explore occupational qualifications
                  and workplace-linked programmes.
                </p>

              </div>

              <div className="tvet-pathway-button">
                Explore Occupational

                <span>
                  →
                </span>
              </div>

            </Link>

          </div>

        </section>

        {/* =====================================
            HOW TVET WORKS
        ====================================== */}

        <section className="tvet-how-section">

          <div className="tvet-section-heading">

            <div>

              <p>
                HOW TVET WORKS
              </p>

              <h2>
                Find your resources
              </h2>

            </div>

            <span>
              TVET uses pathways and programmes
              rather than school grades.
            </span>

          </div>

          <div className="tvet-flow">

            <div className="tvet-flow-card">

              <div className="tvet-flow-number">
                01
              </div>

              <div className="tvet-flow-icon">
                🧭
              </div>

              <h3>
                Choose a pathway
              </h3>

              <p>
                Select NC(V), NATED / Report 191
                or Occupational Programmes.
              </p>

            </div>

            <div className="tvet-flow-arrow">
              →
            </div>

            <div className="tvet-flow-card">

              <div className="tvet-flow-number">
                02
              </div>

              <div className="tvet-flow-icon">
                📚
              </div>

              <h3>
                Choose a programme
              </h3>

              <p>
                Select the programme or qualification
                you are studying.
              </p>

            </div>

            <div className="tvet-flow-arrow">
              →
            </div>

            <div className="tvet-flow-card">

              <div className="tvet-flow-number">
                03
              </div>

              <div className="tvet-flow-icon">
                📖
              </div>

              <h3>
                Choose a level or subject
              </h3>

              <p>
                Continue to the correct level,
                subject or module.
              </p>

            </div>

            <div className="tvet-flow-arrow">
              →
            </div>

            <div className="tvet-flow-card">

              <div className="tvet-flow-number">
                04
              </div>

              <div className="tvet-flow-icon">
                📄
              </div>

              <h3>
                Open a past paper
              </h3>

              <p>
                View available examination and
                assessment resources.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================
            IMPORTANT NOTE
        ====================================== */}

        <section className="tvet-note-section">

          <div className="tvet-note">

            <div className="tvet-note-icon">
              ℹ️
            </div>

            <div>

              <h2>
                TVET is not organised like school
              </h2>

              <p>
                TVET resources are organised around
                pathways, programmes, qualifications,
                levels, subjects and occupational
                learning instead of school grades.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================
            BACK
        ====================================== */}

        <section className="tvet-back-section">

          <Link
            to="/"
            className="tvet-back"
          >
            ← Back to Home
          </Link>

        </section>

      </main>

    </div>
  );
}

export default TVETCollege;