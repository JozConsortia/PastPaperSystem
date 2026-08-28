import { useState } from "react";
import type { FormEvent } from "react";
import Navbar from "../components/Navbar";
import "./UploadPaper.css";

const levelOptions = [
  { value: "Primary School", label: "Primary School" },
  { value: "High School", label: "High School" },
  { value: "TVET College", label: "TVET College" },
  { value: "University", label: "University" },
];

const gradeOptions: Record<string, Array<{ value: string; label: string }>> = {
  "Primary School": [
    { value: "R", label: "Grade R" },
    ...Array.from({ length: 9 }, (_, index) => ({
      value: String(index + 1),
      label: `Grade ${index + 1}`,
    })),
  ],
  "High School": [
    { value: "10", label: "Grade 10" },
    { value: "11", label: "Grade 11" },
    { value: "12", label: "Grade 12" },
  ],
  "TVET College": [
    { value: "NCV", label: "NCV" },
    { value: "NATED", label: "NATED" },
    { value: "Occupational", label: "Occupational" },
  ],
  University: [
    { value: "Undergraduate", label: "Undergraduate" },
    { value: "Postgraduate", label: "Postgraduate" },
  ],
};

const phaseOptions: Record<string, string[]> = {
  "Primary School": [
    "Foundation Phase",
    "Intermediate Phase",
    "Senior Phase",
  ],
  "High School": ["FET Phase"],
  "TVET College": ["NCV", "NATED", "Occupational"],
  University: ["Undergraduate", "Postgraduate"],
};

function UploadPaper() {
  const [message, setMessage] =
    useState("");
  const [messageType, setMessageType] =
    useState<"error" | "success">("success");
  const [educationLevel, setEducationLevel] =
    useState("Primary School");
  const [grade, setGrade] = useState("1");
  const [phase, setPhase] = useState("Foundation Phase");
  const [paperFile, setPaperFile] =
    useState<File | null>(null);
  const [memorandumFile, setMemorandumFile] =
    useState<File | null>(null);

  const availableGrades = gradeOptions[educationLevel];
  const availablePhases = phaseOptions[educationLevel];

  const handleEducationLevelChange = (
    value: string,
  ) => {
    setEducationLevel(value);
    setGrade(gradeOptions[value][0].value);
    setPhase(phaseOptions[value][0]);
    setMessage("");
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!paperFile || paperFile.type !== "application/pdf") {
      setMessageType("error");
      setMessage("Please choose a PDF past paper before submitting.");
      return;
    }

    if (paperFile.size > 10 * 1024 * 1024 ||
      (memorandumFile && memorandumFile.size > 10 * 1024 * 1024)) {
      setMessageType("error");
      setMessage("Each PDF must be smaller than 10 MB.");
      return;
    }

    setMessageType("success");
    setMessage(
      "Details validated. Upload storage is not connected yet."
    );
  };

  return (
    <div className="upload-page">
      <Navbar />

      <main className="upload-main">
        <div className="upload-heading">
          <p>CONTRIBUTE</p>

          <h1>
            Upload a past paper
          </h1>

          <span>
            Share useful educational resources with other learners.
          </span>
        </div>

        <form
          className="upload-form"
          onSubmit={handleSubmit}
        >
          {message && (
            <div className={`upload-message ${messageType}`}>
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
            Description

            <textarea
              name="description"
              placeholder="Describe the paper and what it covers"
              required
              rows={4}
            />
          </label>

          <label>
            School level

            <select
              value={educationLevel}
              onChange={(event) =>
                handleEducationLevelChange(event.target.value)
              }
              required
            >
              {levelOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            Grade

            <select
              value={grade}
              onChange={(event) => setGrade(event.target.value)}
              required
            >
              {availableGrades.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            Phase / programme

            <select
              value={phase}
              onChange={(event) => setPhase(event.target.value)}
              required
            >
              {availablePhases.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label>
            Subject

            <select defaultValue="Mathematics">
              <option>
                Mathematics
              </option>

              <option>
                Home Language
              </option>

              <option>
                First Additional Language
              </option>

              <option>
                Life Skills
              </option>
            </select>
          </label>

          <label>
            Year

            <input
              type="number"
              min="2000"
              max="2100"
              defaultValue="2025"
              required
            />
          </label>

          <label>
            Term

            <select defaultValue="Term 1">
              <option>
                Term 1
              </option>

              <option>
                Term 2
              </option>

              <option>
                Term 3
              </option>

              <option>
                Term 4
              </option>
            </select>
          </label>

          <label>
            Exam type

            <select defaultValue="Test">
              <option>
                Test
              </option>

              <option>
                Examination
              </option>

              <option>
                Assignment
              </option>
            </select>
          </label>

          <label>
            Past paper PDF

            <input
              type="file"
              accept="application/pdf,.pdf"
              onChange={(event) =>
                setPaperFile(event.target.files?.[0] ?? null)
              }
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
              accept="application/pdf,.pdf"
              onChange={(event) =>
                setMemorandumFile(event.target.files?.[0] ?? null)
              }
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