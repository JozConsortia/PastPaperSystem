import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import { apiRequest, getCurrentUser } from "../lib/api";
import "./Dashboard.css";

type Notification = {
  id: number;
  title: string;
  message: string;
  paperId: number | null;
  isRead: boolean;
  createdAt: string;
};

function Dashboard() {
  const user = getCurrentUser();
  const userId = user?.id;
  const userRole = user?.role;
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    if (!userId || userRole === "admin") return;
    apiRequest<Notification[]>("/api/notifications")
      .then(setNotifications)
      .catch(() => setNotifications([]));
  }, [userId, userRole]);

  if (!user) return <Navigate to="/login" replace />;
  if (user.role === "admin") return <Navigate to="/admin" replace />;

  return (
    <div className="dashboard-page">
      <DashboardSidebar />

      <main className="dashboard-main dashboard-content">
        <p className="dashboard-label">
          MY DASHBOARD
        </p>

        <h1>
          Welcome, {user.firstName}
        </h1>

        <p className="dashboard-description">
          Manage your learning resources and uploads.
        </p>

        <section className="dashboard-notifications" aria-label="Notifications">
          <div className="dashboard-notifications-heading">
            <h2>Notifications</h2>
            <span>{notifications.filter((item) => !item.isRead).length} new</span>
          </div>
          {notifications.length === 0 ? (
            <p className="dashboard-empty-notifications">No new paper updates yet.</p>
          ) : (
            notifications.map((notification) => (
              <Link
                key={notification.id}
                to={notification.paperId ? `/paper/${notification.paperId}` : "/primary"}
                className={notification.isRead ? "dashboard-notification read" : "dashboard-notification"}
              >
                <span className="dashboard-notification-dot" />
                <div><strong>{notification.title}</strong><p>{notification.message}</p></div>
              </Link>
            ))
          )}
        </section>

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
            to="/profile"
            className="dashboard-card"
          >
            <span>◎</span>

            <h2>
              Update Profile
            </h2>

            <p>
              Keep your name and email address up to date.
            </p>
          </Link>

        </div>
      </main>
    </div>
  );
}

export default Dashboard;