import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email address and password.");
      return;
    }

    // Authentication will be connected to the backend later.
    console.log({
      email,
      password,
      rememberMe,
    });

    alert("Login successful! Backend authentication will be connected later.");

    navigate("/");
  };

  return (
    <main className="login-page">
      <div className="login-container">

        {/* =========================
            LEFT SIDE
        ========================== */}
        <section className="login-left">
          <Link to="/" className="login-brand">
            <div className="login-brand-icon">P</div>

            <div className="login-brand-text">
              <strong>PastPaper</strong>
              <span>Hub</span>
            </div>
          </Link>

          <div className="login-welcome">
            <p className="login-label">WELCOME BACK</p>

            <h1>
              Keep learning.
              <span>Keep preparing.</span>
            </h1>

            <p className="login-description">
              Sign in to access your academic resources, find past papers,
              and continue preparing for your next test or examination.
            </p>

            <div className="login-feature-card">
              <div className="login-feature-icon">📚</div>

              <div>
                <h3>Everything in one place</h3>
                <p>
                  Find past papers organised by grade, subject, course,
                  module and more.
                </p>
              </div>
            </div>
          </div>

          <div className="login-left-footer">
            <span>Learn</span>
            <span>Practice</span>
            <span>Prepare</span>
            <span>Succeed</span>
          </div>
        </section>

        {/* =========================
            RIGHT SIDE
        ========================== */}
        <section className="login-right">
          <div className="login-card">

            <div className="mobile-brand">
              <Link to="/" className="login-brand">
                <div className="login-brand-icon">P</div>

                <div className="login-brand-text">
                  <strong>PastPaper</strong>
                  <span>Hub</span>
                </div>
              </Link>
            </div>

            <div className="login-header">
              <h2>Welcome back</h2>

              <p>
                Sign in to your account to continue.
              </p>
            </div>

            <form
              className="login-form"
              onSubmit={handleSubmit}
            >
              {/* ERROR */}
              {error && (
                <div className="login-error">
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
                    to="/forgot-password"
                    className="forgot-link"
                  >
                    Forgot password?
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
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* REMEMBER ME */}
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) =>
                    setRememberMe(event.target.checked)
                  }
                />

                <span>Remember me</span>
              </label>

              {/* LOGIN */}
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
              <span className="google-letter">G</span>
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
              By signing in, you agree to our{" "}
              <Link to="/terms">Terms of Service</Link>{" "}
              and{" "}
              <Link to="/privacy">Privacy Policy</Link>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;