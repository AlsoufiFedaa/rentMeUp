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
        var errorCode = error.code;
        var errorMessage = error.message;
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

        <div className="input">
          <h1>{this.state.name}</h1>
          <h3>Name:</h3>
          <input
            defaultValue={this.state.Name}
            onChange={this.handleNameChange}
            placeholder="enter ur Name"
          />
        </div>
        <div className="input">
          <h3>Email:</h3>
          <input
            defaultValue={this.state.Email}
            onChange={this.handleEmailChange}
            placeholder="enter ur Email"
          />
        </div>
        <div className="input">
          <h3>Password:</h3>
          <input
            defaultValue={this.state.Password}
            onChange={this.handlePasswordChange}
            placeholder="enter ur Password"
          />
        </div>
        <div className="input">
          <h3>Mobil:</h3>
          <input
            defaultValue={this.state.Mobile}
            onChange={this.handleMobileChange}
            placeholder="enter ur Mobil"
          />
        </div>
        <Link to="/LogIn" className="btn-primary" onClick={this.addUser}>
          {" "}
          Sign Up
        </Link>
      </div>
    );
  }
}
export default SignUP;
