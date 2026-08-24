import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <Navbar />

      <main>
        <span>404</span>

        <h1>
          Page not found
        </h1>

        <p>
          The page you are looking for does not exist.
        </p>

        <Link to="/">
          Return to Home
        </Link>
      </main>
    </div>
  );
}

export default NotFound;