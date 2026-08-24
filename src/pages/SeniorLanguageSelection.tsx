import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

interface Language {
  id: string;
  name: string;
  shortName: string;
  description: string;
  homeLanguage: boolean;
  firstAdditionalLanguage: boolean;
}

const seniorLanguages: Language[] = [
  {
    id: "afrikaans",
    name: "Afrikaans",
    shortName: "AF",
    description: "Afrikaans language resources",
    homeLanguage: true,
    firstAdditionalLanguage: true,
  },
  {
    id: "english",
    name: "English",
    shortName: "EN",
    description: "English language resources",
    homeLanguage: true,
    firstAdditionalLanguage: true,
  },
  {
    id: "isindebele",
    name: "isiNdebele",
    shortName: "IN",
    description: "isiNdebele language resources",
    homeLanguage: true,
    firstAdditionalLanguage: true,
  },
  {
    id: "isixhosa",
    name: "isiXhosa",
    shortName: "IX",
    description: "isiXhosa language resources",
    homeLanguage: true,
    firstAdditionalLanguage: true,
  },
  {
    id: "isizulu",
    name: "isiZulu",
    shortName: "IZ",
    description: "isiZulu language resources",
    homeLanguage: true,
    firstAdditionalLanguage: true,
  },
  {
    id: "sepedi",
    name: "Sepedi",
    shortName: "SP",
    description: "Sepedi language resources",
    homeLanguage: true,
    firstAdditionalLanguage: true,
  },
  {
    id: "sesotho",
    name: "Sesotho",
    shortName: "SO",
    description: "Sesotho language resources",
    homeLanguage: true,
    firstAdditionalLanguage: true,
  },
  {
    id: "setswana",
    name: "Setswana",
    shortName: "ST",
    description: "Setswana language resources",
    homeLanguage: true,
    firstAdditionalLanguage: true,
  },
  {
    id: "siswati",
    name: "siSwati",
    shortName: "SW",
    description: "siSwati language resources",
    homeLanguage: true,
    firstAdditionalLanguage: true,
  },
  {
    id: "tshivenda",
    name: "Tshivenda",
    shortName: "TV",
    description: "Tshivenda language resources",
    homeLanguage: true,
    firstAdditionalLanguage: true,
  },
  {
    id: "xitsonga",
    name: "XiTsonga",
    shortName: "XT",
    description: "XiTsonga language resources",
    homeLanguage: true,
    firstAdditionalLanguage: true,
  },
  {
    id: "south-african-sign-language",
    name: "South African Sign Language",
    shortName: "SASL",
    description:
      "South African Sign Language Home Language resources",
    homeLanguage: true,
    firstAdditionalLanguage: false,
  },
];

function SeniorLanguageSelection() {
  const {
    gradeNumber,
    subjectId,
  } = useParams();

  const isHomeLanguage =
    subjectId === "home-language";

  const subjectName =
    isHomeLanguage
      ? "Home Language"
      : "First Additional Language";

  const languages =
    seniorLanguages.filter((language) =>
      isHomeLanguage
        ? language.homeLanguage
        : language.firstAdditionalLanguage
    );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#281f2d",
      }}
    >
      <Navbar />

      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "70px 20px",
        }}
      >
        <section
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#9949b8",
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "1.7px",
            }}
          >
            GRADE {gradeNumber}
          </p>

          <h1
            style={{
              margin: "12px 0",
              fontSize: "clamp(40px, 5vw, 62px)",
              lineHeight: 1,
              letterSpacing: "-2.5px",
            }}
          >
            {subjectName}

            <span
              style={{
                display: "block",
                color: "#963bd1",
              }}
            >
              Select a language
            </span>
          </h1>

          <p
            style={{
              maxWidth: "650px",
              margin: "20px auto 0",
              color: "#7d7381",
              fontSize: "13px",
              lineHeight: 1.7,
            }}
          >
            Choose the language for your Grade {gradeNumber}{" "}
            {subjectName} resources.
          </p>
        </section>

        <section>
          <h2
            style={{
              margin: "0 0 8px",
              fontSize: "32px",
            }}
          >
            Choose your language
          </h2>

          <p
            style={{
              margin: "0 0 30px",
              color: "#817683",
              fontSize: "11px",
            }}
          >
            Select a language to view available papers.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3, minmax(0, 1fr))",
              gap: "14px",
            }}
          >
            {languages.map((language) => (
              <Link
                key={language.id}
                to={`/primary/phases/senior/grade/${gradeNumber}/${subjectId}/${language.id}`}
                style={{
                  minHeight: "105px",
                  padding: "17px",
                  display: "flex",
                  alignItems: "center",
                  gap: "13px",
                  textDecoration: "none",
                  border: "1px solid #e4dce8",
                  borderRadius: "14px",
                  background: "#ffffff",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    background: "#f2e5f7",
                    color: "#8e34c6",
                    fontSize: "9px",
                    fontWeight: 800,
                  }}
                >
                  {language.shortName}
                </div>

                <div
                  style={{
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      color: "#302631",
                      fontSize: "14px",
                    }}
                  >
                    {language.name}
                  </h3>

                  <p
                    style={{
                      margin: "4px 0 0",
                      color: "#938995",
                      fontSize: "9px",
                    }}
                  >
                    {language.description}
                  </p>
                </div>

                <span
                  style={{
                    color: "#963bd1",
                    fontSize: "17px",
                  }}
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <Link
            to={`/primary/phases/senior/grade/${gradeNumber}`}
            style={{
              color: "#963bd1",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "11px",
            }}
          >
            ← Back to Grade {gradeNumber}
          </Link>
        </div>
      </main>
    </div>
  );
}

export default SeniorLanguageSelection;