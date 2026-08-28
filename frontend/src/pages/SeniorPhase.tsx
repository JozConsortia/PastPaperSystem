import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const grades = [
  {
    number: "7",
    description:
      "Explore Grade 7 Senior Phase subjects and past papers.",
  },
  {
    number: "8",
    description:
      "Explore Grade 8 Senior Phase subjects and past papers.",
  },
  {
    number: "9",
    description:
      "Explore Grade 9 Senior Phase subjects and past papers.",
  },
];

function SeniorPhase() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#281f2d",
      }}
    >
      <Navbar />

      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "70px 20px",
        }}
      >
        <section
          style={{
            textAlign: "center",
            marginBottom: "65px",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#963bd1",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "1.7px",
            }}
          >
            SENIOR PHASE
          </p>

          <h1
            style={{
              margin: "12px 0",
              fontSize: "clamp(42px, 6vw, 68px)",
              lineHeight: 1,
              letterSpacing: "-3px",
            }}
          >
            Grade 7 – 9
            <span
              style={{
                display: "block",
                color: "#963bd1",
              }}
            >
              Past Papers
            </span>
          </h1>

          <p
            style={{
              maxWidth: "650px",
              margin: "20px auto 0",
              color: "#7d7381",
              fontSize: "13px",
              lineHeight: 1.7,
            }}
          >
            Choose Grade 7, Grade 8 or Grade 9 and explore
            Senior Phase subjects, languages and past papers.
          </p>
        </section>

        <section>
          <div
            style={{
              marginBottom: "30px",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#9949b8",
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "1.6px",
              }}
            >
              SELECT YOUR GRADE
            </p>

            <h2
              style={{
                margin: "8px 0 0",
                fontSize: "34px",
                letterSpacing: "-1px",
              }}
            >
              Senior Phase grades
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            {grades.map((grade) => (
              <Link
                key={grade.number}
                to={`/primary/phases/senior/grade/${grade.number}`}
                style={{
                  minHeight: "270px",
                  padding: "25px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textDecoration: "none",
                  border: "1px solid #e4dce8",
                  borderRadius: "18px",
                  background: "#ffffff",
                  boxSizing: "border-box",
                }}
              >
                <div>
                  <div
                    style={{
                      width: "58px",
                      height: "58px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "14px",
                      background: "#f1e4f6",
                      color: "#963bd1",
                      fontSize: "22px",
                      fontWeight: 800,
                    }}
                  >
                    {grade.number}
                  </div>

                  <p
                    style={{
                      margin: "24px 0 6px",
                      color: "#a060b9",
                      fontSize: "9px",
                      fontWeight: 800,
                      letterSpacing: "1.3px",
                    }}
                  >
                    SENIOR PHASE
                  </p>

                  <h3
                    style={{
                      margin: 0,
                      color: "#2d2431",
                      fontSize: "25px",
                    }}
                  >
                    Grade {grade.number}
                  </h3>

                  <p
                    style={{
                      margin: "10px 0 0",
                      color: "#7d7381",
                      fontSize: "11px",
                      lineHeight: 1.7,
                    }}
                  >
                    {grade.description}
                  </p>
                </div>

                <strong
                  style={{
                    color: "#963bd1",
                    fontSize: "10px",
                  }}
                >
                  View Grade {grade.number} →
                </strong>
              </Link>
            ))}
          </div>
        </section>

        <section
          style={{
            marginTop: "60px",
            padding: "25px",
            border: "1px solid #e4dce8",
            borderRadius: "16px",
            background: "#faf7fc",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "20px",
            }}
          >
            Senior Phase subjects
          </h2>

          <p
            style={{
              margin: "8px 0 0",
              color: "#7d7381",
              fontSize: "11px",
              lineHeight: 1.7,
            }}
          >
            Grades 7, 8 and 9 use the same Senior Phase subject
            structure. The platform will let learners select their
            grade first, followed by the subject.
          </p>
        </section>

        <div
          style={{
            marginTop: "35px",
          }}
        >
          <Link
            to="/primary/phases"
            style={{
              color: "#963bd1",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "11px",
            }}
          >
            ← Back to Phases
          </Link>
        </div>
      </main>
    </div>
  );
}

export default SeniorPhase;