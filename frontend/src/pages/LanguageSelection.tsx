import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./LanguageSelection.css";

interface Language {
  id: string;
  name: string;
  shortName: string;
  description: string;
  signLanguage?: boolean;
}

const officialLanguages: Language[] = [
  {
    id: "afrikaans",
    name: "Afrikaans",
    shortName: "AF",
    description: "Afrikaans learning resources",
  },
  {
    id: "english",
    name: "English",
    shortName: "EN",
    description: "English learning resources",
  },
  {
    id: "isindebele",
    name: "isiNdebele",
    shortName: "IN",
    description: "isiNdebele learning resources",
  },
  {
    id: "isixhosa",
    name: "isiXhosa",
    shortName: "IX",
    description: "isiXhosa learning resources",
  },
  {
    id: "isizulu",
    name: "isiZulu",
    shortName: "IZ",
    description: "isiZulu learning resources",
  },
  {
    id: "sepedi",
    name: "Sepedi",
    shortName: "SP",
    description: "Sepedi learning resources",
  },
  {
    id: "sesotho",
    name: "Sesotho",
    shortName: "SO",
    description: "Sesotho learning resources",
  },
  {
    id: "setswana",
    name: "Setswana",
    shortName: "ST",
    description: "Setswana learning resources",
  },
  {
    id: "siswati",
    name: "siSwati",
    shortName: "SW",
    description: "siSwati learning resources",
  },
  {
    id: "tshivenda",
    name: "Tshivenda",
    shortName: "TV",
    description: "Tshivenda learning resources",
  },
  {
    id: "xitsonga",
    name: "XiTsonga",
    shortName: "XT",
    description: "XiTsonga learning resources",
  },
  {
    id: "south-african-sign-language",
    name: "South African Sign Language",
    shortName: "SASL",
    description:
      "South African Sign Language resources",
    signLanguage: true,
  },
];

function LanguageSelection() {
  const {
    gradeNumber,
    subjectId,
  } = useParams();

  const subjectName =
    subjectId === "home-language"
      ? "Home Language"
      : "First Additional Language";

  return (
    <div className="language-page">
      <Navbar />

      <main>
        <section className="language-hero">
          <p className="language-label">
            GRADE {gradeNumber}
          </p>

          <h1>
            {subjectName}
            <span>
              Select a language
            </span>
          </h1>

          <p>
            Choose from the available South African languages
            to find relevant resources.
          </p>
        </section>

        <section className="language-section">
          <div className="language-heading">
            <p>
              OFFICIAL LANGUAGES
            </p>

            <h2>
              Choose your language
            </h2>

            <span>
              Select a language to view available papers.
            </span>
          </div>

          <div className="language-grid">
            {officialLanguages.map(
              (language) => (
                <Link
                  key={language.id}
                  to={`/primary/phases/foundation/grade/${gradeNumber}/${subjectId}/${language.id}`}
                  className={`language-card ${
                    language.signLanguage
                      ? "sign-language-card"
                      : ""
                  }`}
                >
                  <div className="language-icon">
                    {language.shortName}
                  </div>

                  <div className="language-content">
                    <h3>
                      {language.name}
                    </h3>

                    <p>
                      {language.description}
                    </p>
                  </div>

                  <span className="language-arrow">
                    →
                  </span>
                </Link>
              )
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default LanguageSelection;