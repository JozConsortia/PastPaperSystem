import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  getPaperTypes,
  getTerms,
  getYears,
  pastPapers,
} from "../data/pastPapers";
import "./SubjectPapers.css";

const subjectNames: Record<string, string> = {
  mathematics: "Mathematics",
  "home-language": "Home Language",
  "first-additional-language":
    "First Additional Language",
  "life-skills": "Life Skills",
};

const languageNames: Record<string, string> = {
  afrikaans: "Afrikaans",
  english: "English",
  isindebele: "isiNdebele",
  isixhosa: "isiXhosa",
  isizulu: "isiZulu",
  sepedi: "Sepedi",
  sesotho: "Sesotho",
  setswana: "Setswana",
  siswati: "siSwati",
  tshivenda: "Tshivenda",
  xitsonga: "XiTsonga",
  "south-african-sign-language":
    "South African Sign Language",
};

function SubjectPapers() {
  const {
    gradeNumber,
    subjectId,
    language,
  } = useParams();

  const [selectedYear, setSelectedYear] =
    useState("all");

  const [selectedTerm, setSelectedTerm] =
    useState("all");

  const [selectedType, setSelectedType] =
    useState("all");

  const subjectName =
    subjectNames[subjectId ?? ""] ??
    "Subject";

  const languageName =
    languageNames[language ?? ""];

  /*
   * First select all papers for this
   * grade and subject.
   */
  const basePapers = useMemo(() => {
    return pastPapers.filter(
      (paper) =>
        paper.grade === gradeNumber &&
        paper.subject === subjectId
    );
  }, [gradeNumber, subjectId]);

  /*
   * If a language is part of the URL,
   * filter by language as well.
   */
  const subjectPapers = useMemo(() => {
    if (!language) {
      return basePapers;
    }

    return basePapers.filter(
      (paper) =>
        paper.language === language
    );
  }, [basePapers, language]);

  /*
   * Build filter options from the
   * available papers.
   */
  const years = useMemo(
    () => getYears(subjectPapers),
    [subjectPapers]
  );

  const terms = useMemo(
    () => getTerms(subjectPapers),
    [subjectPapers]
  );

  const paperTypes = useMemo(
    () => getPaperTypes(subjectPapers),
    [subjectPapers]
  );

  /*
   * Apply selected filters.
   */
  const filteredPapers = useMemo(() => {
    return subjectPapers.filter((paper) => {
      const yearMatches =
        selectedYear === "all" ||
        paper.year.toString() === selectedYear;

      const termMatches =
        selectedTerm === "all" ||
        paper.term === selectedTerm;

      const typeMatches =
        selectedType === "all" ||
        paper.paperType === selectedType;

      return (
        yearMatches &&
        termMatches &&
        typeMatches
      );
    });
  }, [
    subjectPapers,
    selectedYear,
    selectedTerm,
    selectedType,
  ]);

  const clearFilters = () => {
    setSelectedYear("all");
    setSelectedTerm("all");
    setSelectedType("all");
  };

  return (
    <div className="papers-page">
      <Navbar />

      <main>
        {/* ======================================
            HERO
        ====================================== */}

        <section className="papers-hero">
          <p>
            GRADE {gradeNumber}
          </p>

          <h1>
            {subjectName}

            {languageName ? (
              <span>
                {languageName}
              </span>
            ) : (
              <span>
                Past Papers
              </span>
            )}
          </h1>

          <p>
            Find past papers, tests and examinations
            using the filters below.
          </p>
        </section>

        {/* ======================================
            CONTENT
        ====================================== */}

        <section className="papers-section">
          {/* FILTERS */}

          <div className="filter-header">
            <div>
              <p>FILTER PAPERS</p>

              <h2>
                Find exactly what you need
              </h2>
            </div>

            <span>
              {filteredPapers.length} paper
              {filteredPapers.length !== 1
                ? "s"
                : ""}{" "}
              found
            </span>
          </div>

          <div className="papers-filter">
            <div className="filter-group">
              <label htmlFor="year">
                Year
              </label>

              <select
                id="year"
                value={selectedYear}
                onChange={(event) =>
                  setSelectedYear(
                    event.target.value
                  )
                }
              >
                <option value="all">
                  All Years
                </option>

                {years.map((year) => (
                  <option
                    key={year}
                    value={year}
                  >
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="term">
                Term
              </label>

              <select
                id="term"
                value={selectedTerm}
                onChange={(event) =>
                  setSelectedTerm(
                    event.target.value
                  )
                }
              >
                <option value="all">
                  All Terms
                </option>

                {terms.map((term) => (
                  <option
                    key={term}
                    value={term}
                  >
                    {term}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="paperType">
                Paper Type
              </label>

              <select
                id="paperType"
                value={selectedType}
                onChange={(event) =>
                  setSelectedType(
                    event.target.value
                  )
                }
              >
                <option value="all">
                  All Types
                </option>

                {paperTypes.map((type) => (
                  <option
                    key={type}
                    value={type}
                  >
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              className="clear-filters"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          </div>

          {/* PAPERS */}

          {filteredPapers.length > 0 ? (
            <div className="paper-list">
              {filteredPapers.map(
                (paper) => (
                  <article
                    key={paper.id}
                    className="paper-card"
                  >
                    <div className="paper-file">
                      PDF
                    </div>

                    <div className="paper-info">
                      <div className="paper-tags">
                        <span>
                          {paper.year}
                        </span>

                        <span>
                          {paper.term}
                        </span>

                        <span>
                          {paper.paperType}
                        </span>
                      </div>

                      <h3>
                        {paper.title}
                      </h3>

                      <p>
                        Grade {paper.grade} •{" "}
                        {subjectName}

                        {languageName &&
                          ` • ${languageName}`}
                      </p>

                      <small>
                        {paper.description}
                      </small>

                      {paper.memorandumAvailable && (
                        <strong className="memo-available">
                          ✓ Memorandum available
                        </strong>
                      )}
                    </div>

                    <div className="paper-actions">
                      <Link
                        to={`/paper/${paper.id}`}
                        className="view-paper"
                      >
                        View Paper
                      </Link>

                      {paper.fileUrl ? (
                        <a
                          href={paper.fileUrl}
                          className="download-paper"
                          download
                        >
                          Download
                        </a>
                      ) : (
                        <span className="download-paper unavailable">
                          PDF unavailable
                        </span>
                      )}
                    </div>
                  </article>
                )
              )}
            </div>
          ) : (
            <div className="no-papers">
              <div className="no-papers-icon">
                🔍
              </div>

              <h2>
                No papers found
              </h2>

              <p>
                There are currently no papers matching
                your selected filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* BACK LINKS */}

          <div className="papers-navigation">
            <Link
              to="/primary/phases"
            >
              ← Back to Primary Phases
            </Link>

            <Link to="/primary/phases/foundation">
              Foundation Phase
            </Link>

            <Link to="/">
              Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SubjectPapers;