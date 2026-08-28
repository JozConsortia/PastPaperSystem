import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import { apiRequest, setSession, type User } from "../lib/api";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    if (!cleanEmail || !cleanPassword) {
      setError("Please enter your email address and password.");
      return;
    }

    try {
      const data = await apiRequest<{ token: string; user: User }>(
        "/api/auth/login",
        {
          method: "POST",
          body: JSON.stringify({ email: cleanEmail, password: cleanPassword }),
        },
      );
      setSession(data.token, data.user);
      localStorage.setItem("rememberPastPaperUser", String(rememberMe));
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Could not sign in.");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      {/* =====================================
          NAVIGATION BAR
      ====================================== */}

      <header className="login-navbar">
        <Navbar />
      </header>

      {/* =====================================
          LOGIN CONTENT
      ====================================== */}

      <main className="login-content">

        <div className="login-container">

          {/* =====================================
              LEFT SIDE
          ====================================== */}

          <section className="login-left">

            <div className="login-welcome">

              <p className="login-label">
                WELCOME BACK
              </p>

              <h1>
                Keep learning.
                <span>Keep preparing.</span>
              </h1>

              <p className="login-description">
                Sign in to access your academic resources,
                find past papers, and continue preparing
                for your next test or examination.
              </p>

              <div className="login-feature-card">

                <div className="login-feature-icon">
                  📚
                </div>

                <div>
                  <h3>
                    Everything in one place
                  </h3>

                  <p>
                    Find past papers organised by grade,
                    subject, course, module and more.
                  </p>
                </div>

              </div>

            </div>

            <div className="login-left-footer">

              <span>
                Past Paper System
              </span>

              <span>
                Learn
              </span>

              <span>
                Prepare
              </span>

              <span>
                Succeed
              </span>

            </div>

          </section>

          {/* =====================================
              RIGHT SIDE
          ====================================== */}

          <section className="login-right">

            <div className="login-card">

              {/* MOBILE BRAND */}

              <div className="mobile-brand">

                <Link
                  to="/"
                  className="login-brand"
                >

                  <span className="login-brand-icon">
                    P
                  </span>

                  <span className="login-brand-text">
                    <strong>Past</strong>
                    <span>Paper</span>
                  </span>

                </Link>

              </div>

              {/* HEADER */}

              <div className="login-header">

                <h2>
                  Welcome back
                </h2>

                <p>
                  Sign in to your account to continue.
                </p>

              </div>

              {/* FORM */}

              <form
                className="login-form"
                onSubmit={handleSubmit}
                noValidate
              >

                {error && (
                  <div
                    className="login-error"
                    role="alert"
                  >
                    {error}
                  </div>
                )}

                {/* EMAIL */}

                <div className="form-group">

                  <label htmlFor="email">
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                  />

                </div>

                {/* PASSWORD */}

                <div className="form-group">

                  <div className="password-header">

                    <label htmlFor="password">
                      Password
                    </label>

                    <Link
                      to="/register"
                      className="forgot-link"
                    >
                      Need help?
                    </Link>

                  </div>

                  <div className="password-wrapper">

                    <input
                      id="password"
                      name="password"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      value={password}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      onChange={(event) =>
                        setPassword(
                          event.target.value
                        )
                      }
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowPassword(
                          (current) => !current
                        )
                      }
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword
                        ? "Hide"
                        : "Show"}
                    </button>

                  </div>

                </div>

                {/* REMEMBER ME */}

                <label className="remember-me">

                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) =>
                      setRememberMe(
                        event.target.checked
                      )
                    }
                  />

                  <span>
                    Remember me
                  </span>

                </label>

                {/* LOGIN BUTTON */}

                <button
                  type="submit"
                  className="login-submit"
                >
                  Sign in
                </button>

              </form>

              {/* DIVIDER */}

              <div className="login-divider">
                <span>OR</span>
              </div>

              {/* GOOGLE */}

              <button
                type="button"
                className="google-button"
                onClick={() =>
                  alert(
                    "Google authentication will be connected later."
                  )
                }
              >

                <span className="google-letter">
                  G
                </span>

                Continue with Google

              </button>

              {/* REGISTER */}

              <p className="register-text">

                Don't have an account?{" "}

                <Link to="/register">
                  Create an account
                </Link>

              </p>

              {/* TERMS */}

              <p className="terms-text">
                By continuing, you agree to the
                terms and conditions of the Past
                Paper System.
              </p>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default Login;