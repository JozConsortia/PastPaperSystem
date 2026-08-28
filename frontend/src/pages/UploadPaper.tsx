import { useState } from "react";
import type { FormEvent } from "react";
import { Navigate } from "react-router-dom";
import { apiRequest, getCurrentUser } from "../lib/api";
import DashboardSidebar from "../components/DashboardSidebar";
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
  const user = getCurrentUser();
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
  const [memorandumAvailable, setMemorandumAvailable] =
    useState(false);

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

  const handleSubmit = async (
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

    if (memorandumAvailable && !memorandumFile) {
      setMessageType("error");
      setMessage("Choose the memorandum PDF or mark it as unavailable.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const form = event.currentTarget;
    formData.set("paper", paperFile);
    formData.set("memorandumAvailable", String(memorandumAvailable));
    if (memorandumFile) {
      formData.set("memorandum", memorandumFile);
    }

    try {
      await apiRequest<{ id: number }>("/api/admin/papers", {
        method: "POST",
        body: formData,
      });
      setMessageType("success");
      setMessage("Past paper uploaded successfully.");
      form.reset();
      setPaperFile(null);
      setMemorandumFile(null);
      setMemorandumAvailable(false);
      setEducationLevel("Primary School");
      setGrade("1");
      setPhase("Foundation Phase");
    } catch (requestError) {
      setMessageType("error");
      setMessage(requestError instanceof Error ? requestError.message : "Could not upload paper.");
    }
  };

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="upload-page">
      <DashboardSidebar />

      <main className="upload-main upload-content">
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
              name="title"
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
              name="educationLevel"
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
              name="grade"
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
              name="phase"
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

            <select name="subject" defaultValue="Mathematics">
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
              name="year"
              min="2000"
              max="2100"
              defaultValue="2025"
              required
            />
          </label>

          <label>
            Term

            <select name="term" defaultValue="Term 1">
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

            <select name="paperType" defaultValue="Test">
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
              name="paper"
              accept="application/pdf,.pdf"
              onChange={(event) =>
                setPaperFile(event.target.files?.[0] ?? null)
              }
              required
            />
          </label>

          <label>
            Memorandum / Answers

            <span className="optional">Select whether a memorandum is available.</span>

            <span className="upload-checkbox-row">
              <input
                type="checkbox"
                name="memorandumAvailable"
                checked={memorandumAvailable}
                onChange={(event) => setMemorandumAvailable(event.target.checked)}
              />
              Memorandum available
            </span>

            <input
              type="file"
              name="memorandum"
              accept="application/pdf,.pdf"
              required={memorandumAvailable}
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