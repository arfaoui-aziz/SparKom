import React from "react";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../helpers/auth";

export default function Navbar({ currentUser }) {
  const history = useHistory();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        React Social
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Accueil <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">
              Users
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Compte
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {!currentUser ? (
                <>
                  <Link className="dropdown-item" to="/register">
                    Inscription
                  </Link>
                  <Link className="dropdown-item" to="/login">
                    Connexion
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className="dropdown-item"
                    to={`/user/${
                      currentUser && currentUser.user && currentUser.user._id
                    }`}
                  >
                    @{currentUser && currentUser.user.name}
                  </Link>
                  <Link
                    className="dropdown-item"
                    onClick={() => {
                      logout(() => {
                        history.push("/login");
                      });
                    }}
                    to="#"
                  >
                    Déconnexion
                  </Link>
                </>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}