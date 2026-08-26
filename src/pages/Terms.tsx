import Navbar from "../components/Navbar";
import "./Legal.css";

function Terms() {
  return (
    <div className="legal-page">
      <Navbar />

      <main className="legal-main">
        <p className="legal-eyebrow">PASTPAPERHUB</p>
        <h1>Terms of use</h1>
        <p className="legal-intro">
          These terms explain the basic rules for using PastPaperHub and
          sharing educational resources on the platform.
        </p>

        <div className="legal-content">
          <section>
            <h2>Using the platform</h2>
            <p>
              PastPaperHub helps learners discover educational resources. Use
              the platform lawfully, respect other users, and do not disrupt or
              misuse the service.
            </p>
          </section>

          <section>
            <h2>Uploaded resources</h2>
            <p>
              Only upload papers and materials that you are allowed to share.
              You are responsible for the accuracy and rights associated with
              anything you contribute.
            </p>
          </section>

          <section>
            <h2>Availability</h2>
            <p>
              The platform is provided as an educational resource service.
              Content and features may change as the system develops, and
              sample resources may be replaced with verified materials.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Terms;
