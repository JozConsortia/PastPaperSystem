import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { apiRequest, getCurrentUser, getToken, setSession, type User } from "../lib/api";
import "./Profile.css";

function Profile() {
  const currentUser = getCurrentUser();
  const [firstName, setFirstName] = useState(currentUser?.firstName ?? "");
  const [lastName, setLastName] = useState(currentUser?.lastName ?? "");
  const [email, setEmail] = useState(currentUser?.email ?? "");
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [accountType, setAccountType] = useState(currentUser?.accountType ?? "Student");

  useEffect(() => {
    apiRequest<{ user: User }>("/api/me")
      .then((data) => {
        setFirstName(data.user.firstName);
        setLastName(data.user.lastName);
        setEmail(data.user.email);
        setAccountType(data.user.accountType ?? "Student");
        setSession(getToken() ?? "", data.user);
      })
      .catch(() => setMessage("Could not load your profile."));
  }, []);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  const saveProfile = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setIsSaving(true);

    try {
      const data = await apiRequest<{ user: User }>("/api/me", {
        method: "PATCH",
        body: JSON.stringify({ firstName, lastName, email }),
      });
      setSession(getToken() ?? "", data.user);
      setMessage("Profile updated successfully.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not update profile.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="profile-page">
      <Navbar />
      <main className="profile-main">
        <p className="profile-label">ACCOUNT</p>
        <h1>Your profile</h1>
        <p className="profile-description">Update the details connected to your account.</p>
        <form className="profile-form" onSubmit={saveProfile}>
          {message && <div className="profile-message">{message}</div>}
          <label>
            First name
            <input value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
          </label>
          <label>
            Last name
            <input value={lastName} onChange={(event) => setLastName(event.target.value)} required />
          </label>
          <label>
            Email address
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </label>
          <div className="profile-detail"><span>Account type</span><strong>{accountType}</strong></div>
          <div className="profile-detail"><span>Access</span><strong>{currentUser.role === "admin" ? "Administrator" : "Student"}</strong></div>
          <button type="submit" disabled={isSaving}>{isSaving ? "Saving..." : "Save changes"}</button>
          <Link to="/dashboard">Back to dashboard</Link>
        </form>
      </main>
    </div>
  );
}

export default Profile;
