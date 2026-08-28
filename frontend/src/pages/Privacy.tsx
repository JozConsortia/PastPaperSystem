import Navbar from "../components/Navbar";
import "./Legal.css";

function Privacy() {
  return (
    <div className="legal-page">
      <Navbar />

      <main className="legal-main">
        <p className="legal-eyebrow">PASTPAPERHUB</p>
        <h1>Privacy policy</h1>
        <p className="legal-intro">
          This page describes the information PastPaperHub uses to provide a
          helpful and reliable learning experience.
        </p>

        <div className="legal-content">
          <section>
            <h2>Information you provide</h2>
            <p>
              Account details and uploaded resource information are used to
              support sign-in, contributions, and the learning features you
              choose to use.
            </p>
          </section>

          <section>
            <h2>Local account data</h2>
            <p>
              This early version stores account details in your browser for
              demonstration purposes. Clear your browser storage to remove
              this local data.
            </p>
          </section>

          <section>
            <h2>Questions</h2>
            <p>
              If you have a question about your information or a resource on
              the platform, use the support channel provided by the service
              administrator.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Privacy;
