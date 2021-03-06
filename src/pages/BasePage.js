import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export default class BasePage extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Publication Manager
            </Link>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {this.props.children}

        <hr />
        <footer>Made by John with ❤️</footer>
      </div>
    );
  }

  name = "John";
  static student = "Parthivi";
}

BasePage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
