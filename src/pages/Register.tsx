import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

interface RegisteredUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accountType: string;
}

function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountType, setAccountType] = useState("Student");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password ||
      !confirmPassword
    ) {
      setError("Please complete all required fields.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreeTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    const existingUsersString = localStorage.getItem("pastPaperUsers");

    const existingUsers: RegisteredUser[] = existingUsersString
      ? JSON.parse(existingUsersString)
      : [];

    const emailAlreadyExists = existingUsers.some(
      (user) =>
        user.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (emailAlreadyExists) {
      setError("An account with this email already exists.");
      return;
    }

    const newUser: RegisteredUser = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      password,
      accountType,
    };

    existingUsers.push(newUser);

    localStorage.setItem(
      "pastPaperUsers",
      JSON.stringify(existingUsers)
    );

    setSuccess("Your account has been created successfully.");

    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <main className="register-page">
      <div className="register-container">
        {/* LEFT SIDE */}
        <section className="register-left">
          <Link to="/" className="register-brand">
            <div className="register-brand-icon">P</div>

            <div className="register-brand-text">
              <strong>PastPaper</strong>
              <span>Hub</span>
            </div>
          </Link>

          <div className="register-welcome">
            <p className="register-label">JOIN PASTPAPERHUB</p>

            <h1>
              Start your
              <span>learning journey.</span>
            </h1>

            <p className="register-description">
              Create your account and get access to past papers and
              educational resources organised for your level of study.
            </p>

            <div className="register-benefits">
              <div className="register-benefit">
                <span>✓</span>
                <p>Find past papers quickly</p>
              </div>

              <div className="register-benefit">
                <span>✓</span>
                <p>Save useful learning resources</p>
              </div>

              <div className="register-benefit">
                <span>✓</span>
                <p>Download papers for studying</p>
              </div>

              <div className="register-benefit">
                <span>✓</span>
                <p>Upload resources in future</p>
              </div>
            </div>
          </div>

          <div className="register-left-footer">
            <span>Learn</span>
            <span>Practice</span>
            <span>Prepare</span>
            <span>Succeed</span>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="register-right">
          <div className="register-card">
            <div className="mobile-register-brand">
              <Link to="/" className="register-brand">
                <div className="register-brand-icon">P</div>

                <div className="register-brand-text">
                  <strong>PastPaper</strong>
                  <span>Hub</span>
                </div>
              </Link>
            </div>

            <div className="register-header">
              <h2>Create account</h2>

              <p>
                Already have an account?{" "}
                <Link to="/login">Sign in</Link>
              </p>
            </div>

            <form
              className="register-form"
              onSubmit={handleSubmit}
            >
              {error && (
                <div className="register-message register-error">
                  {error}
                </div>
              )}

              {success && (
                <div className="register-message register-success">
                  {success}
                </div>
              )}

              {/* FIRST AND LAST NAME */}
              <div className="two-column-fields">
                <div className="form-group">
                  <label htmlFor="firstName">
                    First name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(event) =>
                      setFirstName(event.target.value)
                    }
                    autoComplete="given-name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">
                    Last name
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(event) =>
                      setLastName(event.target.value)
                    }
                    autoComplete="family-name"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="form-group">
                <label htmlFor="registerEmail">
                  Email address
                </label>

                <input
                  id="registerEmail"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  autoComplete="email"
                />
              </div>

              {/* ACCOUNT TYPE */}
              <div className="form-group">
                <label htmlFor="accountType">
                  Account type
                </label>

                <select
                  id="accountType"
                  value={accountType}
                  onChange={(event) =>
                    setAccountType(event.target.value)
                  }
                >
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Lecturer">Lecturer</option>
                  <option value="Contributor">Contributor</option>
                </select>
              </div>

              {/* PASSWORD */}
              <div className="form-group">
                <label htmlFor="registerPassword">
                  Password
                </label>

                <div className="register-password-wrapper">
                  <input
                    id="registerPassword"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Create a password"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="register-password-toggle"
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

              {/* CONFIRM PASSWORD */}
              <div className="form-group">
                <label htmlFor="confirmPassword">
                  Confirm password
                </label>

                <div className="register-password-wrapper">
                  <input
                    id="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(event) =>
                      setConfirmPassword(
                        event.target.value
                      )
                    }
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="register-password-toggle"
                    onClick={() =>
                      setShowConfirmPassword(
                        (current) => !current
                      )
                    }
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* TERMS */}
              <label className="terms-checkbox">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(event) =>
                    setAgreeTerms(event.target.checked)
                  }
                />

                <span>
                  I agree to the{" "}
                  <Link to="/terms">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* SUBMIT */}
              <button
                type="submit"
                className="register-submit"
              >
                Create account
              </button>
            </form>

            <p className="register-bottom-text">
              Already registered?{" "}
              <Link to="/login">Sign in to your account</Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Register;