import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/sfig-logo.png";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand bg-light-blue">
        <div className="container">
          
          <NavLink className="navbar-brand tx-yellow" to="/">
            <img src={logo} width="35" height="35" style={{marginRight: '15px'}} alt="sfig-logo"/>
            Slug Fund Investment Group
          </NavLink>

            <ul className="navbar-nav ml-auto">
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
                <NavLink className="nav-link tx-yellow" to="/members">
                  Members
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link tx-yellow" to="/photos">
                  Photos
                </NavLink>
              </li>
            </ul>

        </div>
      </nav>
    </div>
  );
}

export default Navigation;