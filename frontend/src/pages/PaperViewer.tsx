import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { pastPapers } from "../data/pastPapers";
import { apiRequest } from "../lib/api";
import "./PaperViewer.css";

function PaperViewer() {
  const { paperId } = useParams();
  const localPaper = pastPapers.find((item) => item.id === paperId);
  const [paper, setPaper] = useState(
    localPaper,
  );
  const [isLoading, setIsLoading] = useState(!localPaper);

  useEffect(() => {
    if (!paperId || localPaper) return;

    apiRequest<typeof pastPapers[number]>(`/api/papers/${paperId}`)
      .then(setPaper)
      .catch(() => setPaper(undefined))
      .finally(() => setIsLoading(false));
  }, [paperId, localPaper]);

  if (!paper) {
    return (
      <div className="viewer-page">
        <Navbar />

        <main className="viewer-main">
          <div className="pdf-placeholder">
            <div>
              <h1>{isLoading ? "Loading paper..." : "Paper not found"}</h1>
              <p>{isLoading ? "Retrieving the paper details." : "The selected paper is no longer available."}</p>
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