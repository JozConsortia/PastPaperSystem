          <Link to="/">Back to website <span>→</span></Link>
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { apiRequest, getCurrentUser, type User } from "../lib/api";
import DashboardSidebar from "../components/DashboardSidebar";
import "./AdminDashboard.css";

type Stats = { users: number; papers: number };
type ManagedUser = User & { createdAt: string };
type ManagedPaper = {
  id: number;
  title: string;
  educationLevel: string;
  phase: string;
  grade: string;
  subject: string;
  year: number;
  term: string;
  paperType: string;
  description: string;
  fileUrl?: string;
  memoUrl?: string;
};

function AdminDashboard() {
  const user = getCurrentUser();
  const userId = user?.id;
  const isAdmin = user?.role === "admin";
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState("");
  const [users, setUsers] = useState<ManagedUser[]>([]);
  const [updatingUserId, setUpdatingUserId] = useState<number | null>(null);
  const [papers, setPapers] = useState<ManagedPaper[]>([]);
  const [editingPaper, setEditingPaper] = useState<ManagedPaper | null>(null);
  const [paperActionId, setPaperActionId] = useState<number | null>(null);

  useEffect(() => {
    if (!userId || !isAdmin) return;
    Promise.all([
      apiRequest<Stats>("/api/admin/stats"),
      apiRequest<ManagedUser[]>("/api/admin/users"),
      apiRequest<ManagedPaper[]>("/api/papers"),
    ])
      .then(([nextStats, nextUsers, nextPapers]) => {
        setStats(nextStats);
        setUsers(nextUsers);
        setPapers(nextPapers);
      })
      .catch((requestError: unknown) => setError(requestError instanceof Error ? requestError.message : "Could not load dashboard."));
  }, [userId, isAdmin]);

  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== "admin") return <Navigate to="/dashboard" replace />;

  const updateRole = async (userId: number, role: User["role"]) => {
    setUpdatingUserId(userId);
    setError("");

    try {
      await apiRequest(`/api/admin/users/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({ role }),
      });
      setUsers((current) => current.map((item) =>
        item.id === userId ? { ...item, role } : item,
      ));
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Could not update user.");
    } finally {
      setUpdatingUserId(null);
    }
  };

  const savePaper = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!editingPaper) return;
    setPaperActionId(editingPaper.id);
    setError("");

    try {
      const data = await apiRequest<ManagedPaper>(`/api/admin/papers/${editingPaper.id}`, {
        method: "PATCH",
        body: JSON.stringify(editingPaper),
      });
      setPapers((current) => current.map((paper) => paper.id === data.id ? { ...paper, ...data } : paper));
      setEditingPaper(null);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Could not update paper.");
    } finally {
      setPaperActionId(null);
    }
  };

  const deletePaper = async (paper: ManagedPaper) => {
    if (!window.confirm(`Delete ${paper.title}?`)) return;
    setPaperActionId(paper.id);
    setError("");

    try {
      await apiRequest(`/api/admin/papers/${paper.id}`, { method: "DELETE" });
      setPapers((current) => current.filter((item) => item.id !== paper.id));
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Could not delete paper.");
    } finally {
      setPaperActionId(null);
    }
  };

  return (
    <div className="admin-page">
      <DashboardSidebar />
      <main className="admin-main admin-content">
        <p className="admin-label">ADMINISTRATION</p>
        <h1>Admin dashboard</h1>
        <p className="admin-description">Manage the resource library and monitor platform activity.</p>
        {error && <div className="admin-error">{error}</div>}
        <div className="admin-stats">
          <div><strong>{stats?.papers ?? "-"}</strong><span>Past papers</span></div>
          <div><strong>{stats?.users ?? "-"}</strong><span>Registered users</span></div>
        </div>
        <div className="admin-actions">
          <Link to="/upload">Upload past paper <span>→</span></Link>
          <Link to="/">Back to website <span>→</span></Link>
        </div>
        <section className="admin-users" id="users">
          <div className="admin-users-heading">
            <div>
              <p className="admin-label">USER MANAGEMENT</p>
              <h2>Manage users</h2>
            </div>
            <span>{users.length} accounts</span>
          </div>
          <div className="admin-user-list">
            {users.map((managedUser) => (
              <div className="admin-user-row" key={managedUser.id}>
                <div>
                  <strong>{managedUser.firstName} {managedUser.lastName}</strong>
                  <span>{managedUser.email}</span>
                  <small>{managedUser.accountType ?? "Student"}</small>
                </div>
                <select
                  value={managedUser.role}
                  disabled={updatingUserId === managedUser.id}
                  onChange={(event) => updateRole(managedUser.id, event.target.value as User["role"])}
                  aria-label={`Role for ${managedUser.email}`}
                >
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            ))}
          </div>
        </section>
        <section className="admin-papers" id="papers">
          <div className="admin-users-heading">
            <div>
              <p className="admin-label">PAPER LIBRARY</p>
              <h2>Manage past papers</h2>
            </div>
            <span>{papers.length} papers</span>
          </div>
          <div className="admin-paper-list">
            {papers.map((paper) => (
              <article className="admin-paper-row" key={paper.id}>
                {editingPaper?.id === paper.id ? (
                  <form className="admin-paper-edit" onSubmit={savePaper}>
                    <input value={editingPaper.title} onChange={(event) => setEditingPaper({ ...editingPaper, title: event.target.value })} required />
                    <textarea value={editingPaper.description} onChange={(event) => setEditingPaper({ ...editingPaper, description: event.target.value })} required rows={2} />
                    <div className="admin-paper-edit-actions">
                      <button type="submit" disabled={paperActionId === paper.id}>Save</button>
                      <button type="button" onClick={() => setEditingPaper(null)}>Cancel</button>
                    </div>
                  </form>
                ) : (
                  <>
                    <div>
                      <strong>{paper.title}</strong>
                      <span>{paper.educationLevel} · {paper.phase} · {paper.grade} · {paper.year}</span>
                      <small>{paper.description}</small>
                    </div>
                    <div className="admin-paper-actions">
                      <button type="button" onClick={() => setEditingPaper({ ...paper })}>Edit</button>
                      <button type="button" onClick={() => deletePaper(paper)} disabled={paperActionId === paper.id}>Delete</button>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
