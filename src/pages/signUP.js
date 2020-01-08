import React, { Component } from "react";

import { Link } from "react-router-dom";
import * as firebase from "firebase";

class SignUP extends Component {
  state = {
    Name: "",
    Email: "",
    Password: "",
    Mobile: ""
  };

  addUser = () => {
    const { Name, Email, Password, Mobile } = this.state;
    console.log("EEEERRRRorrr");
    const db = firebase.firestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password)
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);

        // ...
      })
      .then(function() {
        db.collection("users")
          .add({
            name: Name,
            mobile: Mobile
          })

          .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
      });
  };

  handleNameChange = e => {
    this.setState({
      Name: e.target.value
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
  handleMobileChange = e => {
    this.setState({
      Mobile: e.target.value
    });
  };

  render() {
    return (
      <div>
        <div className="nav-header">
          <h1 style={{ marginTop: "180px" }}>SignUP</h1>
        </div>
        <div className="singUp">
          <div className="input">
            <h1>{this.state.name}</h1>
            <h3 className="inNA">Name:</h3>
            <input
              type="text"
              defaultValue={this.state.Name}
              onChange={this.handleNameChange}
              placeholder="enter ur Name"
              required
            />
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
          <div className="input">
            <h3 className="inNA">Mobil:</h3>
            <input
              type="tel"
              defaultValue={this.state.Mobile}
              onChange={this.handleMobileChange}
              placeholder="enter ur Mobil"
              required
            />
          </div>
          <Link to="/LogIn" className="btn-primary" onClick={this.addUser}>
            {" "}
            Sign Up
          </Link>
        </div>
      </div>
    );
  }
}
export default SignUP;
