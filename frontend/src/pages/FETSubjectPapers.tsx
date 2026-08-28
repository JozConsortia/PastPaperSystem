import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import "./FETSubjectPapers.css";

interface SubjectInfo {
  name: string;
  shortName?: string;
  description: string;
  icon: string;
}

interface Paper {
  id: string;
  title: string;
  year: string;
  term: string;
  paperType: string;
  language: string;
}

const subjectInformation: Record<string, SubjectInfo> = {
  "home-language": {
    name: "Home Language",
    shortName: "HL",
    description:
      "Home Language examination papers and revision resources.",
    icon: "Aa",
  },

  "first-additional-language": {
    name: "First Additional Language",
    shortName: "FAL",
    description:
      "First Additional Language examination papers and resources.",
    icon: "Ab",
  },

  "second-additional-language": {
    name: "Second Additional Language",
    shortName: "SAL",
    description:
      "Second Additional Language examination papers and resources.",
    icon: "Ac",
  },

  mathematics: {
    name: "Mathematics",
    description:
      "Mathematics tests, examinations and revision papers.",
    icon: "∑",
  },

  "mathematical-literacy": {
    name: "Mathematical Literacy",
    description:
      "Mathematical Literacy examination and revision resources.",
    icon: "%",
  },

  "life-orientation": {
    name: "Life Orientation",
    description:
      "Life Orientation assessment and examination resources.",
    icon: "◎",
  },

  "life-sciences": {
    name: "Life Sciences",
    description:
      "Life Sciences tests, examinations and revision papers.",
    icon: "🧬",
  },

  "physical-sciences": {
    name: "Physical Sciences",
    description:
      "Physical Sciences Physics and Chemistry papers.",
    icon: "⚛",
  },

  "agricultural-sciences": {
    name: "Agricultural Sciences",
    description:
      "Agricultural Sciences examination resources.",
    icon: "🌱",
  },

  "technical-sciences": {
    name: "Technical Sciences",
    description:
      "Technical Sciences assessment and examination papers.",
    icon: "⚗",
  },

  accounting: {
    name: "Accounting",
    description:
      "Accounting tests, examinations and revision papers.",
    icon: "R",
  },

  "business-studies": {
    name: "Business Studies",
    description:
      "Business Studies examination and revision resources.",
    icon: "▣",
  },

  economics: {
    name: "Economics",
    description:
      "Economics examination papers and revision resources.",
    icon: "↗",
  },

  history: {
    name: "History",
    description:
      "History source-based and examination papers.",
    icon: "⌛",
  },

  geography: {
    name: "Geography",
    description:
      "Geography assessment and examination papers.",
    icon: "🌍",
  },

  "religion-studies": {
    name: "Religion Studies",
    description:
      "Religion Studies examination resources.",
    icon: "✦",
  },

  "computer-applications-technology": {
    name: "Computer Applications Technology",
    shortName: "CAT",
    description:
      "CAT theory and practical examination papers.",
    icon: "⌨",
  },

  "information-technology": {
    name: "Information Technology",
    shortName: "IT",
    description:
      "Information Technology theory and programming papers.",
    icon: "</>",
  },

  "engineering-graphics-design": {
    name: "Engineering Graphics and Design",
    shortName: "EGD",
    description:
      "EGD examination and drawing resources.",
    icon: "⌐",
  },

  "visual-arts": {
    name: "Visual Arts",
    description:
      "Visual Arts theory and practical resources.",
    icon: "🎨",
  },

  music: {
    name: "Music",
    description:
      "Music theory and practical examination resources.",
    icon: "♫",
  },

  "dramatic-arts": {
    name: "Dramatic Arts",
    description:
      "Dramatic Arts examination resources.",
    icon: "🎭",
  },

  "dance-studies": {
    name: "Dance Studies",
    description:
      "Dance Studies assessment and examination resources.",
    icon: "◌",
  },

  "design-studies": {
    name: "Design Studies",
    description:
      "Design Studies assessment resources.",
    icon: "◇",
  },

  tourism: {
    name: "Tourism",
    description:
      "Tourism assessment and examination papers.",
    icon: "✈",
  },

  "hospitality-studies": {
    name: "Hospitality Studies",
    description:
      "Hospitality Studies theory and practical papers.",
    icon: "🍴",
  },

  "consumer-studies": {
    name: "Consumer Studies",
    description:
      "Consumer Studies examination resources.",
    icon: "🛒",
  },

  "civil-technology": {
    name: "Civil Technology",
    description:
      "Civil Technology theory and practical papers.",
    icon: "🏗",
  },

  "electrical-technology": {
    name: "Electrical Technology",
    description:
      "Electrical Technology assessment resources.",
    icon: "⚡",
  },

  "mechanical-technology": {
    name: "Mechanical Technology",
    description:
      "Mechanical Technology examination papers.",
    icon: "⚙",
  },

  "agricultural-technology": {
    name: "Agricultural Technology",
    description:
      "Agricultural Technology assessment resources.",
    icon: "🚜",
  },

  "agricultural-management-practices": {
    name: "Agricultural Management Practices",
    description:
      "Agricultural Management Practices resources.",
    icon: "🌾",
  },
};

/*
  Temporary paper data.

  Later we should move this into your central pastPapers
  data source/database. The important part is that every
  paper carries its grade and subject.
*/

const papers: Paper[] = [
  {
    id: "fet-12-maths-2025-term-1",
    title: "Mathematics Test",
    year: "2025",
    term: "Term 1",
    paperType: "Test",
    language: "English",
  },
  {
    id: "fet-12-maths-2025-june",
    title: "Mathematics June Examination",
    year: "2025",
    term: "June",
    paperType: "Examination",
    language: "English",
  },
  {
    id: "fet-12-maths-2024-final",
    title: "Mathematics Final Examination",
    year: "2024",
    term: "November",
    paperType: "Examination",
    language: "English",
  },
];

function FETSubjectPapers() {
  const { gradeNumber, subjectId } = useParams();

  const subject =
    subjectId && subjectInformation[subjectId]
      ? subjectInformation[subjectId]
      : null;

  const validGrade =
    gradeNumber === "10" ||
    gradeNumber === "11" ||
    gradeNumber === "12";

  if (!validGrade || !subject) {
    return (
      <div className="fet-papers-page">

        <header className="fet-papers-header">
          <Navbar />
        </header>

        <main className="fet-papers-error">

          <div className="fet-papers-error-icon">
            !
          </div>

          <p>
            FET PAST PAPERS
          </p>

          <h1>
            Resource not found
          </h1>

          <span>
            The selected grade or subject could not be found.
          </span>

          <Link to="/high-school/fet">
            ← Back to FET Phase
          </Link>

        </main>

      </div>
    );
  }

  /*
    These filters make the page ready for a real
    database later.
  */

  const matchingPapers = papers.filter((paper) => {
    const paperGrade =
      paper.id.includes(`fet-${gradeNumber}-`);

    const paperSubject =
      subjectId === "mathematics"
        ? paper.id.includes("maths")
        : true;

    return paperGrade && paperSubject;
  });

  return (
    <div className="fet-papers-page">

      {/* =====================================
          NAVIGATION
      ====================================== */}

      <header className="fet-papers-header">
        <Navbar />
      </header>

      {/* =====================================
          HERO
      ====================================== */}

      <section className="fet-papers-hero">

        <div className="fet-papers-subject-icon">
          {subject.icon}
        </div>

        <p>
          GRADE {gradeNumber} · FET PHASE
        </p>

        <h1>
          {subject.name}
        </h1>

        <span>
          {subject.description}
        </span>

      </section>

      {/* =====================================
          MAIN
      ====================================== */}

      <main className="fet-papers-main">

        {/* BREADCRUMB */}

        <div className="fet-papers-breadcrumb">

          <Link to="/high-school">
            High School
          </Link>

          <span>
            /
          </span>

          <Link to="/high-school/fet">
            FET
          </Link>

          <span>
            /
          </span>

          <Link
            to={`/high-school/fet/grade/${gradeNumber}`}
          >
            Grade {gradeNumber}
          </Link>

          <span>
            /
          </span>

          <span>
            {subject.name}
          </span>

        </div>

        {/* =====================================
            HEADING
        ====================================== */}

        <div className="fet-papers-heading">

          <div>

            <p>
              PAST PAPERS
            </p>

            <h2>
              {subject.name} papers
            </h2>

          </div>

          <span>
            {matchingPapers.length} papers
          </span>

        </div>

        {/* =====================================
            FILTERS
        ====================================== */}

        <div className="fet-paper-filters">

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
              All Terms
            </option>

            <option value="Term 1">
              Term 1
            </option>

            <option value="June">
              June
            </option>

            <option value="November">
              November
            </option>
          </select>

          <select defaultValue="all">
            <option value="all">
              All Paper Types
            </option>

            <option value="Test">
              Test
            </option>

            <option value="Examination">
              Examination
            </option>
          </select>

        </div>

        {/* =====================================
            PAPERS
        ====================================== */}

        {matchingPapers.length > 0 ? (
          <div className="fet-paper-list">

            {matchingPapers.map((paper) => (

              <article
                key={paper.id}
                className="fet-paper-card"
              >

                <div className="fet-paper-icon">
                  📄
                </div>

                <div className="fet-paper-content">

                  <p className="fet-paper-tag">
                    {paper.paperType}
                  </p>

                  <h3>
                    {paper.title}
                  </h3>

                  <div className="fet-paper-meta">

                    <span>
                      {paper.year}
                    </span>

                    <span>
                      {paper.term}
                    </span>

                    <span>
                      {paper.language}
                    </span>

                  </div>

                </div>

                <Link
                  to={`/paper/${paper.id}`}
                  className="fet-paper-button"
                >
                  Open Paper →
                </Link>

              </article>

            ))}

          </div>
        ) : (
          <div className="fet-no-papers">

            <div>
              📚
            </div>

            <h3>
              No papers available yet
            </h3>

            <p>
              There are currently no uploaded papers
              for Grade {gradeNumber} {subject.name}.
            </p>

          </div>
        )}

        {/* =====================================
            BACK
        ====================================== */}

        <div className="fet-papers-back">

          <Link
            to={`/high-school/fet/grade/${gradeNumber}/subjects`}
          >
            ← Back to Grade {gradeNumber} Subjects
          </Link>

        </div>

      </main>

    </div>
  );
}

export default FETSubjectPapers;