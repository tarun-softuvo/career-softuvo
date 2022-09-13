import React from "react";
import { Link } from "react-router-dom";
import JoinImg from "../../assets/images/logo-white.png";

function Header() {
  return (
    <div>
      <header id="header">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a href="/" className="navbar-brand">
              <img src={JoinImg} className="img-fluid" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/why-join-softuvo">
                    Why Join Softuvo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/life-at-softuvo">
                    Life at Softuvo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/our-team">
                    Our Team
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/upskill-session">
                    Upskill Sessions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news">
                    News
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">
                    Contact
                  </Link>
                </li>
                <li className="nav-item navbar__button">
                  <Link className="headButton" to="/job-detail">
                    Jobs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Header;
