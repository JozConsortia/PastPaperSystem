import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  universities,
  universityModules,
} from "../data/universityData";
import "./University.css";

interface UniversityPaper {
  id: string;
  title: string;
  year: string;
  type: string;
  semester: string;
}

const papers: UniversityPaper[] = [
  {
    id: "uni-demo-1",
    title: "Programming Fundamentals Test",
    year: "2025",
    type: "Test",
    semester: "Semester 1",
  },

  {
    id: "uni-demo-2",
    title: "Programming Fundamentals Examination",
    year: "2025",
    type: "Examination",
    semester: "Semester 2",
  },

  {
    id: "uni-demo-3",
    title: "Programming Fundamentals Examination",
    year: "2024",
    type: "Examination",
    semester: "Semester 2",
  },
];

function UniversityModulePapers() {
  const {
    universityId,
    moduleId,
  } = useParams();

  const university = universities.find(
    (item) => item.id === universityId
  );

  const module = universityModules.find(
    (item) => item.id === moduleId
  );

  if (!module) {
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
            UNIVERSITY MODULE
          </p>

          <h1>
            Module not found
          </h1>

          <span>
            The selected module could not be found.
          </span>

          <Link to="/university">
            ← Back to University
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

      <section className="university-module-hero">

        <div className="university-module-code-large">
          {module.code}
        </div>

        <p>
          {university?.abbreviation || "UNIVERSITY"}
          {" · "}
          {module.level}
        </p>

        <h1>
          {module.name}
        </h1>

        <span>
          {module.description}
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

          {university && (
            <>
              <Link
                to={`/university/${university.id}`}
              >
                {university.abbreviation}
              </Link>

              <span>
                /
              </span>
            </>
          )}

          <strong>
            {module.code}
          </strong>

        </div>

        <div className="university-section-heading">

          <div>

            <p>
              PAST PAPERS
            </p>

            <h2>
              {module.code} papers
            </h2>

          </div>

          <span>
            {papers.length} papers
          </span>

        </div>

        {/* FILTERS */}

        <div className="university-paper-filters">

          <select defaultValue="all">

            <option value="all">
              All Years
            </option>

            <option value="2025">
              2025
            </option>

            <option value="2024">
              2024
            </option>

          </select>

          <select defaultValue="all">

            <option value="all">
              All Semesters
            </option>

            <option value="Semester 1">
              Semester 1
            </option>

            <option value="Semester 2">
              Semester 2
            </option>

          </select>

          <select defaultValue="all">

            <option value="all">
              All Types
            </option>

            <option value="Test">
              Test
            </option>

            <option value="Examination">
              Examination
            </option>

          </select>

        </div>

        {/* PAPERS */}

        <div className="university-paper-list">

          {papers.map(
            (paper) => (

              <article
                key={paper.id}
                className="university-paper-card"
              >

                <div className="university-paper-icon">
                  📄
                </div>

                <div className="university-paper-content">

                  <p>
                    {paper.type}
                  </p>

                  <h3>
                    {paper.title}
                  </h3>

                  <div>

                    <span>
                      {paper.year}
                    </span>

                    <span>
                      {paper.semester}
                    </span>

                  </div>

                </div>

                <Link
                  to={`/paper/${paper.id}`}
                  className="university-paper-button"
                >
                  Open Paper →
                </Link>

              </article>

            )
          )}

        </div>

        <div className="university-demo-note">

          <strong>
            Demo paper data
          </strong>

          <span>
            Replace this temporary array with your
            central PastPaperHub paper database.
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
            ← Back to University
          </Link>

        </div>

      </main>

    </div>
  );
}

export default UniversityModulePapers;