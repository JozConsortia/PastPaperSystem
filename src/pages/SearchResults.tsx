import { useState } from "react";

import type {
  FormEvent,
} from "react";

import {
  Link,
  useSearchParams,
} from "react-router-dom";

import {
  searchResourcesByQuery,
} from "../data/searchData";

import type {
  SearchResource,
} from "../data/searchData";

import "./SearchResults.css";

function SearchResultsView() {

  const [searchParams, setSearchParams] =
    useSearchParams();

  const query =
    searchParams.get("q") || "";

  const [searchInput, setSearchInput] =
    useState(query);

  const [selectedCategory, setSelectedCategory] =
    useState<"All" | SearchResource["category"]>(
      "All"
    );

  const allResults =
    searchResourcesByQuery(query);

  const filteredResults =
    selectedCategory === "All"
      ? allResults
      : allResults.filter(
          (result) =>
            result.category === selectedCategory
        );

  const handleSearch = (
    event: FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    const cleanQuery =
      searchInput.trim();

    if (!cleanQuery) {
      setSearchParams({});
      return;
    }

    setSearchParams({
      q: cleanQuery,
    });

  };

  const categories: Array<
    "All" | SearchResource["category"]
  > = [
    "All",
    "Primary School",
    "High School",
    "TVET",
    "University",
  ];

  return (
    <div className="search-results-page">

      {/* =====================================
          HEADER
      ====================================== */}

      <header className="search-results-header">

        <Link
          to="/"
          className="search-results-logo"
        >
          <div className="search-results-logo-icon">
            P
          </div>

          <div className="search-results-logo-text">
            <strong>
              PastPaper
            </strong>

            <span>
              Hub
            </span>
          </div>
        </Link>

        <Link
          to="/"
          className="search-results-home-link"
        >
          ← Home
        </Link>

      </header>

      {/* =====================================
          HERO
      ====================================== */}

      <section className="search-results-hero">

        <p>
          GLOBAL SEARCH
        </p>

        <h1>
          Find what you need.
          <span>
            Faster.
          </span>
        </h1>

        <form
          className="global-search-form"
          onSubmit={handleSearch}
        >

          <div className="global-search-input-wrapper">

            <span>
              ⌕
            </span>

            <input
              type="search"
              value={searchInput}
              onChange={(event) =>
                setSearchInput(
                  event.target.value
                )
              }
              placeholder="Search grade, subject, module, programme or university..."
              autoFocus
            />

            {searchInput && (
              <button
                type="button"
                className="search-clear-button"
                onClick={() => {
                  setSearchInput("");
                  setSearchParams({});
                }}
                aria-label="Clear search"
              >
                ×
              </button>
            )}

            <button
              type="submit"
              className="global-search-button"
            >
              Search
            </button>

          </div>

        </form>

      </section>

      {/* =====================================
          RESULTS
      ====================================== */}

      <main className="search-results-main">

        {!query ? (

          <section className="search-empty-state">

            <div className="search-empty-icon">
              🔎
            </div>

            <h2>
              What are you looking for?
            </h2>

            <p>
              Try searching for a grade, subject,
              module, qualification, programme,
              university or education level.
            </p>

            <div className="search-examples">

              <button
                type="button"
                onClick={() =>
                  setSearchParams({
                    q: "mathematics",
                  })
                }
              >
                Mathematics
              </button>

              <button
                type="button"
                onClick={() =>
                  setSearchParams({
                    q: "Grade 10",
                  })
                }
              >
                Grade 10
              </button>

              <button
                type="button"
                onClick={() =>
                  setSearchParams({
                    q: "N4",
                  })
                }
              >
                N4
              </button>

              <button
                type="button"
                onClick={() =>
                  setSearchParams({
                    q: "CSC101",
                  })
                }
              >
                CSC101
              </button>

              <button
                type="button"
                onClick={() =>
                  setSearchParams({
                    q: "TUT",
                  })
                }
              >
                TUT
              </button>

            </div>

          </section>

        ) : (

          <>
            {/* RESULTS HEADING */}

            <div className="search-results-heading">

              <div>

                <p>
                  SEARCH RESULTS
                </p>

                <h2>
                  Results for "
                  {query}
                  "
                </h2>

              </div>

              <span>
                {filteredResults.length}{" "}
                {filteredResults.length === 1
                  ? "result"
                  : "results"}
              </span>

            </div>

            {/* CATEGORY FILTERS */}

            <div className="search-category-filters">

              {categories.map(
                (category) => (

                  <button
                    key={category}
                    type="button"
                    className={
                      selectedCategory ===
                      category
                        ? "search-category-button active"
                        : "search-category-button"
                    }
                    onClick={() =>
                      setSelectedCategory(
                        category
                      )
                    }
                  >
                    {category}
                  </button>

                )
              )}

            </div>

            {/* NO RESULTS */}

            {filteredResults.length === 0 ? (

              <section className="no-search-results">

                <div>
                  🔎
                </div>

                <h2>
                  No matching resources
                </h2>

                <p>
                  We couldn't find a resource matching
                  your search. Try a different subject,
                  grade, module code or programme.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchInput("");
                    setSearchParams({});
                    setSelectedCategory(
                      "All"
                    );
                  }}
                >
                  Clear search
                </button>

              </section>

            ) : (

              /* RESULTS */

              <div className="search-results-grid">

                {filteredResults.map(
                  (result: SearchResource) => (

                    <Link
                      key={result.id}
                      to={result.path}
                      className="search-result-card"
                    >

                      <div className="search-result-top">

                        <div className="search-result-icon">

                          {result.category ===
                          "Primary School"
                            ? "📚"
                            : result.category ===
                              "High School"
                            ? "🎓"
                            : result.category ===
                              "TVET"
                            ? "🛠️"
                            : "🏛️"}

                        </div>

                        <span>
                          {result.type}
                        </span>

                      </div>

                      <p className="search-result-category">
                        {result.category}
                      </p>

                      <h3>
                        {result.title}
                      </h3>

                      <p className="search-result-description">
                        {result.description}
                      </p>

                      <div className="search-result-footer">

                        <span>
                          Open resource
                        </span>

                        <b>
                          →
                        </b>

                      </div>

                    </Link>

                  )
                )}

              </div>

            )}

          </>

        )}

      </main>

    </div>
  );
}

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  return <SearchResultsView key={query} />;
}

export default SearchResults;