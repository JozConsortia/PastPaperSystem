import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function IntermediatePhase() {
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
        <p
          style={{
            color: "#963bd1",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "1.5px",
          }}
        >
          INTERMEDIATE PHASE
        </p>

        <h1
          style={{
            fontSize: "50px",
            margin: "10px 0",
          }}
        >
          Grade 4 – 6
        </h1>

        <p
          style={{
            color: "#7d7381",
            marginBottom: "40px",
          }}
        >
          Select a grade.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          <Link
            to="/primary/phases/intermediate/grade/4"
            style={cardStyle}
          >
            <strong>Grade 4</strong>
            <span>View Grade 4 →</span>
          </Link>

          <Link
            to="/primary/phases/intermediate/grade/5"
            style={cardStyle}
          >
            <strong>Grade 5</strong>
            <span>View Grade 5 →</span>
          </Link>

          <Link
            to="/primary/phases/intermediate/grade/6"
            style={cardStyle}
          >
            <strong>Grade 6</strong>
            <span>View Grade 6 →</span>
          </Link>
        </div>

        <div style={{ marginTop: "40px" }}>
          <Link
            to="/primary/phases"
            style={{
              color: "#963bd1",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            ← Back to Phases
          </Link>
        </div>
      </main>
    </div>
  );
}

const cardStyle = {
  minHeight: "160px",
  padding: "25px",
  border: "1px solid #e4dce8",
  borderRadius: "16px",
  background: "#ffffff",
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "space-between",
  boxSizing: "border-box" as const,
};

export default IntermediatePhase;