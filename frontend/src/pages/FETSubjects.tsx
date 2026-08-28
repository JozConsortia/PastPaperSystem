import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import "./FETSubjects.css";

interface Subject {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  icon: string;
  group: string;
}

const subjects: Subject[] = [
  // =====================================
  // LANGUAGES
  // =====================================

  {
    id: "home-language",
    name: "Home Language",
    shortName: "HL",
    description:
      "Home Language resources, assessments and past papers.",
    icon: "Aa",
    group: "Languages",
  },

  {
    id: "first-additional-language",
    name: "First Additional Language",
    shortName: "FAL",
    description:
      "First Additional Language resources and past papers.",
    icon: "Ab",
    group: "Languages",
  },

  {
    id: "second-additional-language",
    name: "Second Additional Language",
    shortName: "SAL",
    description:
      "Second Additional Language learning resources and papers.",
    icon: "Ac",
    group: "Languages",
  },

  // =====================================
  // CORE
  // =====================================

  {
    id: "mathematics",
    name: "Mathematics",
    description:
      "Mathematics assessments, tests and past examination papers.",
    icon: "∑",
    group: "Mathematics & Core",
  },

  {
    id: "mathematical-literacy",
    name: "Mathematical Literacy",
    description:
      "Mathematical Literacy resources and past papers.",
    icon: "%",
    group: "Mathematics & Core",
  },

  {
    id: "life-orientation",
    name: "Life Orientation",
    description:
      "Life Orientation assessments and examination resources.",
    icon: "◎",
    group: "Mathematics & Core",
  },

  // =====================================
  // SCIENCES
  // =====================================

  {
    id: "life-sciences",
    name: "Life Sciences",
    description:
      "Life Sciences topics, tests and past examination papers.",
    icon: "🧬",
    group: "Sciences",
  },

  {
    id: "physical-sciences",
    name: "Physical Sciences",
    description:
      "Physics and Chemistry resources and past papers.",
    icon: "⚛",
    group: "Sciences",
  },

  {
    id: "agricultural-sciences",
    name: "Agricultural Sciences",
    description:
      "Agricultural Sciences assessments and examination papers.",
    icon: "🌱",
    group: "Sciences",
  },

  {
    id: "technical-sciences",
    name: "Technical Sciences",
    description:
      "Technical Sciences resources and past examination papers.",
    icon: "⚗",
    group: "Sciences",
  },

  // =====================================
  // COMMERCE
  // =====================================

  {
    id: "accounting",
    name: "Accounting",
    description:
      "Accounting tests, examinations and revision papers.",
    icon: "R",
    group: "Commerce",
  },

  {
    id: "business-studies",
    name: "Business Studies",
    description:
      "Business Studies assessments and past papers.",
    icon: "▣",
    group: "Commerce",
  },

  {
    id: "economics",
    name: "Economics",
    description:
      "Economics examination resources and past papers.",
    icon: "↗",
    group: "Commerce",
  },

  // =====================================
  // HUMANITIES
  // =====================================

  {
    id: "history",
    name: "History",
    description:
      "History assessments, source-based tasks and past papers.",
    icon: "⌛",
    group: "Humanities",
  },

  {
    id: "geography",
    name: "Geography",
    description:
      "Geography tests, examinations and past papers.",
    icon: "🌍",
    group: "Humanities",
  },

  {
    id: "religion-studies",
    name: "Religion Studies",
    description:
      "Religion Studies assessments and examination resources.",
    icon: "✦",
    group: "Humanities",
  },

  // =====================================
  // TECHNOLOGY
  // =====================================

  {
    id: "computer-applications-technology",
    name: "Computer Applications Technology",
    shortName: "CAT",
    description:
      "CAT theory and practical examination resources.",
    icon: "⌨",
    group: "Technology & Computing",
  },

  {
    id: "information-technology",
    name: "Information Technology",
    shortName: "IT",
    description:
      "IT theory, programming and practical assessment resources.",
    icon: "</>",
    group: "Technology & Computing",
  },

  {
    id: "engineering-graphics-design",
    name: "Engineering Graphics and Design",
    shortName: "EGD",
    description:
      "EGD drawings, assessments and examination resources.",
    icon: "⌐",
    group: "Technology & Computing",
  },

  // =====================================
  // ARTS
  // =====================================

  {
    id: "visual-arts",
    name: "Visual Arts",
    description:
      "Visual Arts theory and practical assessment resources.",
    icon: "🎨",
    group: "Arts & Design",
  },

  {
    id: "music",
    name: "Music",
    description:
      "Music theory, practical work and examination resources.",
    icon: "♫",
    group: "Arts & Design",
  },

  {
    id: "dramatic-arts",
    name: "Dramatic Arts",
    description:
      "Dramatic Arts assessments and examination resources.",
    icon: "🎭",
    group: "Arts & Design",
  },

  {
    id: "dance-studies",
    name: "Dance Studies",
    description:
      "Dance Studies theory and practical assessment resources.",
    icon: "◌",
    group: "Arts & Design",
  },

  {
    id: "design-studies",
    name: "Design Studies",
    description:
      "Design Studies assessments and examination resources.",
    icon: "◇",
    group: "Arts & Design",
  },

  // =====================================
  // SERVICES
  // =====================================

  {
    id: "tourism",
    name: "Tourism",
    description:
      "Tourism assessments, tests and past examination papers.",
    icon: "✈",
    group: "Services",
  },

  {
    id: "hospitality-studies",
    name: "Hospitality Studies",
    description:
      "Hospitality Studies practical and theory resources.",
    icon: "🍴",
    group: "Services",
  },

  {
    id: "consumer-studies",
    name: "Consumer Studies",
    description:
      "Consumer Studies assessments and past papers.",
    icon: "🛒",
    group: "Services",
  },

  // =====================================
  // TECHNICAL SUBJECTS
  // =====================================

  {
    id: "civil-technology",
    name: "Civil Technology",
    description:
      "Civil Technology theory and practical resources.",
    icon: "🏗",
    group: "Technical Subjects",
  },

  {
    id: "electrical-technology",
    name: "Electrical Technology",
    description:
      "Electrical Technology theory and practical resources.",
    icon: "⚡",
    group: "Technical Subjects",
  },

  {
    id: "mechanical-technology",
    name: "Mechanical Technology",
    description:
      "Mechanical Technology assessments and past papers.",
    icon: "⚙",
    group: "Technical Subjects",
  },

  {
    id: "agricultural-technology",
    name: "Agricultural Technology",
    description:
      "Agricultural Technology learning and assessment resources.",
    icon: "🚜",
    group: "Technical Subjects",
  },

  {
    id: "agricultural-management-practices",
    name: "Agricultural Management Practices",
    description:
      "Agricultural management theory and practical resources.",
    icon: "🌾",
    group: "Technical Subjects",
  },
];

const groups = [
  "Languages",
  "Mathematics & Core",
  "Sciences",
  "Commerce",
  "Humanities",
  "Technology & Computing",
  "Arts & Design",
  "Services",
  "Technical Subjects",
];

function FETSubjects() {
  const { gradeNumber } = useParams();

  const validGrades = ["10", "11", "12"];

  const isValidGrade =
    gradeNumber !== undefined &&
    validGrades.includes(gradeNumber);

  if (!isValidGrade) {
    return (
      <div className="fet-subjects-page">

        <header className="fet-subjects-header">
          <Navbar />
        </header>

        <main className="fet-subjects-error">

          <div className="fet-subjects-error-icon">
            !
          </div>

          <p>
            FET PHASE
          </p>

          <h1>
            Grade not found
          </h1>

          <span>
            Please choose Grade 10, Grade 11 or Grade 12.
          </span>

          <Link to="/high-school/fet">
            ← Back to FET Phase
          </Link>

        </main>

      </div>
    );
  }

  return (
    <div className="fet-subjects-page">

      {/* =====================================
          NAVIGATION
      ====================================== */}

      <header className="fet-subjects-header">
        <Navbar />
      </header>

      {/* =====================================
          HERO
      ====================================== */}

      <section className="fet-subjects-hero">

        <p>
          FET PHASE
        </p>

        <h1>
          Grade {gradeNumber}
          <span>
            Subjects
          </span>
        </h1>

        <p>
          Choose a subject to explore its available
          past papers, assessments and learning resources.
        </p>

      </section>

      {/* =====================================
          SUBJECTS
      ====================================== */}

      <main className="fet-subjects-main">

        <div className="fet-subjects-intro">

          <div>

            <p>
              SUBJECT SELECTION
            </p>

            <h2>
              Choose a subject
            </h2>

          </div>

          <span>
            {subjects.length} subjects available
          </span>

        </div>

        {/* =================================
            SUBJECT GROUPS
        ================================== */}

        {groups.map((group) => {

          const groupSubjects =
            subjects.filter(
              (subject) => subject.group === group
            );

          if (groupSubjects.length === 0) {
            return null;
          }

          return (
            <section
              key={group}
              className="fet-subject-group"
            >

              <div className="fet-subject-group-heading">

                <div className="group-heading-line"></div>

                <div>
                  <p>
                    SUBJECT GROUP
                  </p>

                  <h3>
                    {group}
                  </h3>
                </div>

                <span>
                  {groupSubjects.length}
                </span>

              </div>

              <div className="fet-subject-grid">

                {groupSubjects.map((subject) => (

                  <Link
                    key={subject.id}
                    to={`/high-school/fet/grade/${gradeNumber}/${subject.id}`}
                    className="fet-subject-card"
                  >

                    <div className="fet-subject-card-top">

                      <div className="fet-subject-icon">
                        {subject.icon}
                      </div>

                      {subject.shortName && (
                        <span className="fet-subject-short">
                          {subject.shortName}
                        </span>
                      )}

                    </div>

                    <h4>
                      {subject.name}
                    </h4>

                    <p>
                      {subject.description}
                    </p>

                    <div className="fet-subject-action">

                      <span>
                        View Past Papers
                      </span>

                      <span>
                        →
                      </span>

                    </div>

                  </Link>

                ))}

              </div>

            </section>
          );
        })}

        {/* =====================================
            BACK
        ====================================== */}

        <div className="fet-subjects-back">

          <Link to={`/high-school/fet/grade/${gradeNumber}`}>
            ← Back to Grade {gradeNumber}
          </Link>

        </div>

      </main>

    </div>
  );
}

export default FETSubjects;