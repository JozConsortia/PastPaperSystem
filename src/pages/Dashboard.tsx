import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <Link to="/" className="dashboard-logo">
          PastPaper<span>Hub</span>
        </Link>

        <Link to="/" className="dashboard-home">
          Home
        </Link>
      </header>

      <main className="dashboard-main">
        <p className="dashboard-label">
          MY DASHBOARD
        </p>

        <h1>Welcome back</h1>

        <p className="dashboard-description">
          Manage your learning resources and uploads.
        </p>

        <div className="dashboard-grid">
          <Link to="/primary" className="dashboard-card">
            <span>📚</span>
            <h2>Find Past Papers</h2>
            <p>
              Search for past papers by grade and subject.
            </p>
          </Link>

          <Link to="/upload" className="dashboard-card">
            <span>⬆</span>
            <h2>Upload Paper</h2>
            <p>
              Share educational resources with other learners.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;