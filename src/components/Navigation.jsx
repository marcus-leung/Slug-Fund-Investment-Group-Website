import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/sfig-logo.png";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg bg-light-blue">
        <div className="container-fluid pl-2">
          <NavLink className="navbar-brand tx-yellow" to="/" style={{ marginRight: "0"}}>
            <img
              src={logo}
              width="35"
              height="35"
              style={{ marginRight: "12px" }}
              alt="sfig-logo"
              className="logo"
            />
            Slug Fund Investment Group
          </NavLink>

          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ margin: "0", padding: "5px" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto pr-5">
              <li className="nav-item active">
                <NavLink className="nav-link tx-yellow" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link tx-yellow" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link tx-yellow" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link tx-yellow" to="/teams">
                  Teams
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link tx-yellow" to="/officers">
                  Officers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link tx-yellow" to="/photos">
                  Photos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
