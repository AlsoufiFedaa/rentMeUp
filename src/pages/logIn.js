import React, { Component } from "react";
import * as firebase from "firebase";
import { Link } from "react-router-dom";

class LogIn extends Component {
  state = {
    Email: "",
    Password: ""
  };
  signin = () => {
    const { Email, Password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(Email, Password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error);
        // ...
      });
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
    return (
      <div>
        <div className="nav-header">
          <h1 style={{ marginTop: "180px" }}>Log In</h1>
        </div>

        <div className="input">
          <h3 className="inNA">Email:</h3>
          <input
            type="email"
            defaultValue={this.state.Email}
            onChange={this.handleEmailChange}
            placeholder="enter ur Email"
            required
          />
        </div>
        <div className="input">
          <h3 className="inNA">Password:</h3>
          <input
            type="password"
            defaultValue={this.state.Password}
            onChange={this.handlePasswordChange}
            placeholder="enter ur Password"
            required
          />
        </div>
        <Link to="/mainMap" className="btn-primary" onClick={this.signin}>
          {" "}
          Log In
        </Link>
      </div>
    );
  }
}
export default LogIn;
