import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import * as firebase from "firebase";

import { AuthContext } from "../Components/auth";

class NavBar extends Component {
  state = {
    isOPen: false,
    name: ""
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.uid);
        firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .get()
          .then(doc => {
            console.log(doc.data(), "name ogf uesr");
            this.setState({ name: doc.data().name });
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
          });
      } else {
        console.log("not logged in ");
        // User not logged in or has just logged out.
      }
      // let uid = firebase.auth().currentUser.uid;
      // if ((uid = null)) {
      //   console.log("hi");
      // } else {
      //   firebase
      //     .firestore()
      //     .collection("users")
      //     .doc(uid)
      //     .get()
      //     .then(doc => {
      //       alert(doc.date().name);
      //       let name;
      //       this.setState({
      //         name: doc.date().name
      //       });
      //     });
    });
  }
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
          localStorage.clear();
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
          <div className="uName">
            <img
              style={{ height: 30, width: 30, alignSelf: "center" }}
              src={require("../assets/userPic.png")}
            />
            <h4
              style={{
                marginLeft: 10,
                marginTop: 25
              }}
            >
              {this.state.name}
            </h4>
          </div>
        </div>
        <div></div>
      </nav>
    );
  }
}
export default NavBar;
