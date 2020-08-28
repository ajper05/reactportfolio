import React from "react";
import { Link } from "react-router-dom";
import config from "../../config";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <img
          className="navbar-brand"
          src={require("../../res/img/mainlogo.png")}
          alt="mainlogo"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to={config.routes.home}>
              Home
            </Link>
            <Link className="nav-item nav-link" to={config.routes.portfolio}>
              Portfolio
            </Link>
            <Link className="nav-item nav-link" to={config.routes.contact}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
