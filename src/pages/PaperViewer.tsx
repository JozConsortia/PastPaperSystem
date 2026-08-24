import { Link, useParams } from "react-router-dom";
import "./PaperViewer.css";

function PaperViewer() {
  const { paperId } = useParams();

  return (
    <div className="viewer-page">
      <header className="viewer-header">
        <Link to="/primary/foundation-phase">
          ← Back to Foundation Phase
        </Link>
      </header>

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
          </div>

          <button type="button">
            Download PDF
          </button>
        </div>

        <div className="pdf-placeholder">
          <div>
            <div className="pdf-icon">PDF</div>

            <h2>Past Paper Viewer</h2>

            <p>
              Paper ID: {paperId}
            </p>

            <span>
              The real PDF viewer will be connected when
              we add our document storage system.
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PaperViewer;