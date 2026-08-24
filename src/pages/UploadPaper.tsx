import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./UploadPaper.css";

function UploadPaper() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage(
      "Paper submitted successfully. Backend upload storage will be connected later."
    );
  };

  return (
    <div className="upload-page">
      <header className="upload-header">
        <Link to="/dashboard">
          ← Dashboard
        </Link>
      </header>

      <main className="upload-main">
        <div className="upload-heading">
          <p>CONTRIBUTE</p>

          <h1>Upload a past paper</h1>

          <span>
            Share useful educational resources with other
            learners.
          </span>
        </div>

        <form
          className="upload-form"
          onSubmit={handleSubmit}
        >
          {message && (
            <div className="upload-message">
              {message}
            </div>
          )}

          <label>
            Paper title

            <input
              type="text"
              placeholder="e.g. Grade 1 Mathematics Term 2"
              required
            />
          </label>

          <label>
            Grade

            <select defaultValue="1">
              <option value="1">Grade 1</option>
              <option value="2">Grade 2</option>
              <option value="3">Grade 3</option>
            </select>
          </label>

          <label>
            Subject

            <select defaultValue="Mathematics">
              <option>Mathematics</option>
              <option>Home Language</option>
              <option>First Additional Language</option>
              <option>Life Skills</option>
            </select>
          </label>

          <label>
            Year

            <input
              type="number"
              min="2000"
              max="2100"
              defaultValue="2025"
            />
          </label>

          <label>
            Term

            <select defaultValue="Term 1">
              <option>Term 1</option>
              <option>Term 2</option>
              <option>Term 3</option>
              <option>Term 4</option>
            </select>
          </label>

          <label>
            Exam type

            <select defaultValue="Test">
              <option>Test</option>
              <option>Examination</option>
              <option>Assignment</option>
            </select>
          </label>

          <label>
            Past paper PDF

            <input
              type="file"
              accept=".pdf"
              required
            />
          </label>

          <label>
            Memorandum / Answers
            <span className="optional">
              Optional
            </span>

            <input
              type="file"
              accept=".pdf"
            />
          </label>

          <button type="submit">
            Submit Paper
          </button>
        </form>
      </main>
    </div>
  );
}

export default UploadPaper;