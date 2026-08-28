import { NavLink, useNavigate } from "react-router-dom";
import { clearSession, getCurrentUser } from "../lib/api";
import "./DashboardSidebar.css";

function DashboardSidebar() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  if (!user) return null;

  const links = user.role === "admin"
    ? [
        { to: "/admin", label: "Overview", icon: "▦" },
        { to: "/upload", label: "Upload papers", icon: "↑" },
        { to: "/admin#users", label: "Manage users", icon: "◎" },
        { to: "/admin#papers", label: "Manage papers", icon: "▤" },
        { to: "/profile", label: "My profile", icon: "◎" },
      ]
    : [
        { to: "/dashboard", label: "Overview", icon: "▦" },
        { to: "/primary", label: "Find papers", icon: "⌕" },
        { to: "/profile", label: "My profile", icon: "◎" },
      ];

  const signOut = () => {
    clearSession();
    navigate("/login", { replace: true });
  };

  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-sidebar-brand">
        <span className="dashboard-sidebar-mark">P</span>
        <span><strong>PastPaper</strong><em>Hub</em></span>
      </div>

      <div className="dashboard-sidebar-user">
        <span className="dashboard-sidebar-avatar">
          {user.firstName.charAt(0).toUpperCase()}
        </span>
        <div>
          <strong>{user.firstName} {user.lastName}</strong>
          <small>{user.role === "admin" ? "Administrator" : "Student"}</small>
        </div>
      </div>

      <nav className="dashboard-sidebar-nav" aria-label="Dashboard navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/dashboard" || link.to === "/admin"}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            <span>{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="dashboard-sidebar-bottom">
        <NavLink to="/">Back to website <span>↗</span></NavLink>
        <button type="button" onClick={signOut}>Sign out <span>↪</span></button>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
