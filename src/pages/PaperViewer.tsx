import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { pastPapers } from "../data/pastPapers";
import "./PaperViewer.css";

function PaperViewer() {
  const { paperId } = useParams();
  const paper = pastPapers.find((item) => item.id === paperId);

  if (!paper) {
    return (
      <div className="viewer-page">
        <Navbar />

        <main className="viewer-main">
          <div className="pdf-placeholder">
            <div>
              <h1>Paper not found</h1>
              <p>The selected paper is no longer available.</p>
              <Link to="/primary">Back to Primary School</Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="viewer-page">
      <Navbar />

      <main className="viewer-main">
        <div className="viewer-title">
          <div>
            <p>PAST PAPER</p>

            <h1>
              {paper.title}
            </h1>

            <span>
              {paper.term} • {paper.year}
            </span>

            <small>
              Paper ID: {paperId}
            </small>
          </div>

          {paper.fileUrl ? (
            <a href={paper.fileUrl} download>
              Download PDF
            </a>
          ) : (
            <span className="viewer-download-unavailable">
              PDF unavailable
            </span>
          )}
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