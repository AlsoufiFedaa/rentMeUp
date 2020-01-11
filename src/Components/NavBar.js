import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {
    isOPen: false
  };
  handleToggle = () => {
    this.setState({ isOPen: !this.state.isOPen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img className="navImg" src={logo} alt="rentmeUp" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOPen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="#"> Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavBar;
