import React, { Component } from "react";
import Title from "../Components/Title";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import * as firebase from "firebase";
import Rating from "react-rating";
import emptyStar from "../assets/star-empty.png";
import fullStar from "../assets/PngItem_3174427.png";

class Contact extends Component {
  state = {
    Name: "",
    Email: "",
    Subejact: "",
    Massage: "",
    feed: "",
    rating: "",
    lastIndex: -1
  };
  async componentDidMount() {
    let { lastIndex } = this.state;
    const snapshot = await firebase
      .firestore()
      .collection("FeedBacks")
      .get();
    const collection = {};
    snapshot.forEach(doc => {
      collection[doc.id] = doc.data();
      let newIndex = collection[doc.id].index;
      if (newIndex > this.state.lastIndex) {
        this.setState({ lastIndex: newIndex });
      }
      console.log("if", this.state.lastIndex);
    });
  }
  addUser = () => {
    const { Name, Email, Massage, Subejact, rating, lastIndex } = this.state;

    const db = firebase.firestore();

    console.log(Name, Email, Massage, Subejact, "firebase", lastIndex);

    db.collection("FeedBacks")
      .add({
        name: Name,
        email: Email,
        subejact: Subejact,
        massage: Massage,
        rating: rating,
        index: lastIndex + 1
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
  handleFeedChange = e => {
    this.setState({
      feed: e.target.value
    });
  };
  handleRatingChange = rating => {
    this.setState({ rating: rating });
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
{/* 
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
            </div> */}
            <div className="form-groupp">
              <input
                defaultValue={this.state.feed}
                onChange={this.handleFeedChange}
                type="text"
                name="firstName"
                id="firstName"
                className="form-control"
                required
              />
              <label className="sl" htmlFor="firstName">
                Your Feedback
              </label>
            </div>
            <div className="form-groupp">
              <h3>Rate Us!</h3>{" "}
              <Rating
                emptySymbol={
                  <img
                    src={emptyStar}
                    className="icon"
                    width="30"
                    height="30"
                    alt="Emptystar"
                  />
                }
                initialRating={this.state.rating}
                fullSymbol={
                  <img
                    src={fullStar}
                    className="icon"
                    width="30"
                    height="30"
                    alt="Fullstar"
                  />
                }
                onChange={this.handleRatingChange}
              />
            </div>

            <Link
              to="/MainContainer"
              className="btn-primary"
              onClick={this.addUser}
            >

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
