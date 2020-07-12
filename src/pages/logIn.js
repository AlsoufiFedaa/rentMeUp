import Title from "../Components/Title";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import React, { Component } from "react";
import { Redirect } from "react-router";

import * as firebase from "firebase";
import { AuthContext } from "../Components/auth";
import { withRouter } from "react-router-dom";
class LogIn extends Component {
  state = {
    Email: "",
    Password: ""
  };
  static contextType = AuthContext;
  signin = () => {
    const { Email, Password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(Email, Password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        alert(errorCode, errorMessage);
        // ...
      }).then = () => {
      this.props.history.push("/HomeLogged");
      console.log("###loginn###");
    };
  };

  handleEmailChange = e => {
    this.setState({
      Email: e.target.value
    });
  };
  handlePasswordChange = e => {
    this.setState({
      Password: e.target.value
    });
  };

  render() {
    const { currentUser } = this.context;
    console.log(currentUser);

    if (currentUser) {
      return <Redirect to="/HomeLogged" />;
    }
    return (
      <div>
        <div
          className="nav-header"
          style={{ marginTop: "40px", marginLeft: "25%" }}
        >
          <Title title="LogIn" />

          <div className="singUp">
            <div className="form-groupp">
              <input
                defaultValue={this.state.Email}
                onChange={this.handleEmailChange}
                type="text"
                name="firstName"
                id="firstName"
                className="form-control"
                required
              />
              <label className="sl" htmlFor="firstName">
                Email
              </label>
            </div>

            <div className="form-groupp">
              <input
                defaultValue={this.state.Password}
                onChange={this.handlePasswordChange}
                type="password"
                name="firstName"
                id="firstName"
                className="form-control"
                required
              />
              <label className="sl" htmlFor="firstName">
                Password
              </label>
            </div>

            <Link className="btn-primary" onClick={this.signin}>
              Log In
            </Link>
          </div>
          <div className="imgSL">
            <img className="IMsl" src={logo} alt="rentmeUp" />
          </div>
        </div>
      </div>
    );
  }
}
export default LogIn;
