import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      setError(
        "Please enter your email address and password."
      );
      return;
    }

    const storedUsers = localStorage.getItem(
      "pastPaperUsers"
    );

    if (!storedUsers) {
      setError(
        "No account was found. Please create an account first."
      );
      return;
    }

    const users = JSON.parse(storedUsers);

    const user = users.find(
      (item: {
        email: string;
        password: string;
      }) =>
        item.email.toLowerCase() ===
          email.trim().toLowerCase() &&
        item.password === password
    );

    if (!user) {
      setError(
        "Incorrect email or password."
      );
      return;
    }

    localStorage.setItem(
      "currentPastPaperUser",
      JSON.stringify(user)
    );

    if (rememberMe) {
      localStorage.setItem(
        "rememberPastPaperUser",
        "true"
      );
    }

    navigate("/dashboard");
  };

  return (
    <main className="login-page">
      <Navbar />

      <div className="login-container">
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
              Sign in to access your academic resources, find past papers,
              and continue preparing for your next test or examination.
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
                  Find past papers organised by grade, subject,
                  course, module and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="login-right">
          <div className="login-card">
            <div className="login-header">
              <h2>
                Welcome back
              </h2>

              <p>
                Sign in to your account to continue.
              </p>
            </div>

            <form
              className="login-form"
              onSubmit={handleSubmit}
            >
              {error && (
                <div className="login-error">
                  {error}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="Enter your email address"
                  autoComplete="email"
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                />
              </div>

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
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    onChange={(event) =>
                      setPassword(event.target.value)
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
                  >
                    {showPassword
                      ? "Hide"
                      : "Show"}
                  </button>
                </div>
              </div>

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

              <button
                type="submit"
                className="login-submit"
              >
                Sign in
              </button>
            </form>

            <div className="login-divider">
              <span>OR</span>
            </div>

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

            <p className="register-text">
              Don't have an account?{" "}
              <Link to="/register">
                Create an account
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;