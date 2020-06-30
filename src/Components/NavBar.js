import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import * as firebase from "firebase";

import { AuthContext } from "../Components/auth";

class NavBar extends Component {
  state = {
    isOPen: false
  };
  static contextType = AuthContext;
  handleToggle = () => {
    this.setState({ isOPen: !this.state.isOPen });
  };
  SignOut = () => {
    const { currentUser } = this.context;
    console.log(currentUser);

    if (currentUser) {
      return firebase
        .auth()
        .signOut()
        .then(function() {
          console.log("sign out ");
          alert("sign out successfully");
          localStorage.clear()
        })
        .catch(function(error) {
          console.log("An error happened.");
        });
    } else {
      return alert("Log In first");
    }
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
              <Link to="/contactUs"> Contact</Link>
            </li>
            <li>
              <Link to="/Feedbacks"> Feedbacks</Link>
            </li>
            <li className="singOut">
              <Link to="/" onClick={this.SignOut}>
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavBar;
