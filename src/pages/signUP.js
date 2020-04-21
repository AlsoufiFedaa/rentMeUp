import React, { Component } from "react";
import Title from "../Components/Title";
import logo from "../assets/logo1.png";
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
    console.log(Name, Email, Password, Mobile);
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
        <div
          className="nav-header"
          style={{ marginTop: "40px", marginLeft: "25%" }}
        >
          <Title title="SignUp" />

          <div className="singUp">
            <div className="form-groupp">
              <input
                defaultValue={this.state.Name}
                onChange={this.handleNameChange}
                type="text"
                name="firstName"
                id="firstName"
                className="form-control"
                required
              />
              <label className="sl" htmlFor="firstName">
                Name
              </label>
            </div>

            <div className="form-groupp">
              <input
                defaultValue={this.state.Email}
                onChange={this.handleEmailChange}
                type="email"
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
            <div className="form-groupp">
              <input
                defaultValue={this.state.Mobile}
                onChange={this.handleMobileChange}
                type="text"
                name="firstName"
                id="firstName"
                className="form-control"
                required
              />
              <label className="sl" htmlFor="firstName">
                Mobile
              </label>
            </div>

            <Link
              to="/HomeLogged"
              className="btn-primary"
              onClick={this.addUser}
            >
              Sign Up
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
export default SignUP;
