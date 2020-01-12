import React, { Component } from "react";
import Title from "../Components/Title";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import * as firebase from "firebase";

class Contact extends Component {
  state = {
    Name: "",
    Email: "",
    Subejact: "",
    Massage: ""
  };

  addUser = () => {
    const { Name, Email, Massage, Subejact } = this.state;

    const db = firebase.firestore();

    console.log(Name, Email, Massage, Subejact);

    db.collection("FeedBacks")
      .add({
        name: Name,
        email: Email,
        subejact: Subejact,
        massage: Massage
      })

      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
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
  handleSubejactChange = e => {
    this.setState({
      Subejact: e.target.value
    });
  };
  handleMassageChange = e => {
    this.setState({
      Massage: e.target.value
    });
  };

  render() {
    return (
      <div>
        <div
          className="nav-header"
          style={{ marginTop: "45px", marginLeft: "25%" }}
        >
          <Title title="Contact US" />

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
                defaultValue={this.state.Subejact}
                onChange={this.handleSubejactChange}
                type="text"
                name="firstName"
                id="firstName"
                className="form-control"
                required
              />
              <label className="sl" htmlFor="firstName">
                Subejact
              </label>
            </div>
            <div className="form-groupp">
              <input
                defaultValue={this.state.massage}
                onChange={this.handleMassageChange}
                type="text"
                name="firstName"
                id="firstName"
                className="form-control"
                required
              />
              <label className="sl" htmlFor="firstName">
                Massage
              </label>
            </div>

            <Link to="/" className="btn-primary" onClick={this.addUser}>
              {" "}
              Submit
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
export default Contact;
