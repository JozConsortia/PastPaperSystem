import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./PaperViewer.css";

function PaperViewer() {
  const { paperId } = useParams();

  return (
    <div className="viewer-page">
      <Navbar />

      <main className="viewer-main">
        <div className="viewer-title">
          <div>
            <p>PAST PAPER</p>

            <h1>
              Grade 1 Mathematics
            </h1>

            <span>
              Term 2 Examination • 2025
            </span>

            <small>
              Paper ID: {paperId}
            </small>
          </div>

          <button type="button">
            Download PDF
          </button>
        </div>

        <div className="pdf-placeholder">
          <div>
            <div className="pdf-icon">
              PDF
            </div>

            <h2>
              Past Paper Viewer
            </h2>

            <p>
              The real PDF viewer will be connected
              when document storage is implemented.
            </p>

            <Link to="/primary">
              Back to Primary School
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PaperViewer;