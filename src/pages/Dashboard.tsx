import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

function Dashboard() {
  const storedUser = localStorage.getItem(
    "currentPastPaperUser"
  );

  let userName = "Learner";

  if (!storedUser) {
    return <Navigate to="/login" replace />;
  }

  if (storedUser) {
    try {
      const user = JSON.parse(storedUser);

      if (user.firstName) {
        userName = user.firstName;
      }
    } catch {
      userName = "Learner";
    }
  }

  return (
    <div className="dashboard-page">
      <Navbar />

      <main className="dashboard-main">
        <p className="dashboard-label">
          MY DASHBOARD
        </p>

        <h1>
          Welcome, {userName}
        </h1>

        <p className="dashboard-description">
          Manage your learning resources and uploads.
        </p>

        <div className="dashboard-grid">
          <Link
            to="/primary"
            className="dashboard-card"
          >
            <span>📚</span>

            <h2>
              Find Past Papers
            </h2>

            <p>
              Search for past papers by grade and subject.
            </p>
          </Link>

          <Link
            to="/upload"
            className="dashboard-card"
          >
            <span>⬆</span>

            <h2>
              Upload Paper
            </h2>

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