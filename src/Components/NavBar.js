import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import * as firebase from "firebase";
import { AuthContext } from "../Components/auth";
import { withRouter } from "react-router-dom";

// import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import userP from "../assets/user1.png";
import home from "../assets/home.png";
import logOut from "../assets/logOut.png";

import { ReactComponent as CogIcon } from "../assets/icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../assets/icons/chevron.svg";

class NavBar extends Component {
  state = {
    isOPen: false,
    name: "",
    loggedin: null,
    openD: false
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.uid);
        this.setState({ loggedin: true });
        firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .get()
          .then(doc => {
            this.setState({ name: doc.data().name });
            console.log(doc.data(), "name ogf uesr");
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
          });
      } else {
        console.log("not logged in ");
        // User not logged in or has just logged out.
      }
    });
  }

  static contextType = AuthContext;
  handleToggle = () => {
    this.setState({ isOPen: !this.state.isOPen });
  };

  render() {
    let drop;
    if (this.state.openD) {
      drop = <DropdownMenu />;
    } else {
      drop = <div></div>;
    }

    let info;
    if (this.state.loggedin) {
      info = (
        <button
          className="uName"
          onClick={() => this.setState({ openD: !this.state.openD })}
        >
          <img
            style={{ height: 30, width: 45, alignSelf: "center" }}
            src={require("../assets/userPic.png")}
          />
          <h4
            style={{
              marginLeft: 10,
              marginTop: 25,
              marginRight: 20
            }}
          >
            {this.state.name}
          </h4>
          {drop}
        </button>
      );
    } else {
      info = <div></div>;
    }

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
          </ul>
          {info}
        </div>
        <div></div>
      </nav>
    );
  }
}

const SignOut = () => {
  const { currentUser, setCurrentUser } = this.context;
  console.log(
    "dsfyhfujnksdfgysduijnkldsyauinjkfayusdinklfayudsbijnkfayudsbijxnk  "
  );

  if (currentUser) {
    return firebase
      .auth()
      .signOut()
      .then(function() {
        console.log("sign out ");
        alert("sign out successfully");
        localStorage.clear();
        this.props.history.push("/");
        setCurrentUser(null);
      })
      .catch(function(error) {
        console.log("An error happened.");
      });
  } else {
    return alert("Log In first");
  }
};
function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown">
      <div className="menu">
        <DropdownItem leftIcon={<img src={userP} height={20} />}>
          My Profile
        </DropdownItem>
        <DropdownItem leftIcon={<img src={home} height={20} />}>
          All Estates
        </DropdownItem>

        <DropdownItem
          leftIcon={<CogIcon />}
          rightIcon={<ChevronIcon />}
          goToMenu="settings"
        >
          Settings
        </DropdownItem>
        <DropdownItem
          onClick={this.signOut}
          leftIcon={<img src={logOut} height={20} />}
          rightIcon={<ChevronIcon />}
          goToMenu="animals"
        >
          Sign Out
        </DropdownItem>
      </div>
    </div>
  );
}
export default NavBar;
