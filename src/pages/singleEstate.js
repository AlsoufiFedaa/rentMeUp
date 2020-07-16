import React, { Component } from "react";

import { Link } from "react-router-dom";
import Title from "../Components/Title";
import * as firebase from "firebase";

// import * as firebase from "firebase";
class SingleEstate extends Component {
  state = {
    listOfImages: [],
    item: {}
  };

  componentDidMount() {
    console.log("props", this.props);
    let { item } = this.state;
    const id = this.props.match.params.id;
    firebase
      .firestore()
      .collection("estates")
      .doc(id)
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot.data());
        item = querySnapshot.data();
        this.setState({ item });
      });
    console.log("single", this.state.item);
  }

  render() {
    const { item } = this.state;
    console.log("item", item);

    return (
      <div>
        <Title title="Images Gallery" />
        <section className="single-room">
          <div style={{ alignItems: "center" }}>
            <div className="images">
              {item.url &&
                item.url.map((item, i) => {
                  return (
                    <img
                      className="singleImage"
                      src={item || "http://via.placeholder.com/400x300"}
                      alt="Uploaded images"
                      height="300"
                      width="400"
                      key={i}
                    />
                  );
                })}
            </div>
          </div>
          <div className="data">
            <article className="desc">
              <h3> Details</h3>
              <p>
                {" "}
                Driveway parking as well as plenty of street parking.
                <br />
                The garage (300 sq ft) was converted to a bonus room that was
                <br />
                not included in the 1240 sq ft of the house.
                <br />
                Within walking distance to public transportation, nearby
                <br />
                schools, shopping center, and the beach.
                <br />
                Enjoy the large open concept of your living room, and the full
                <br />
                size dining room!
                <br />
                This apartment home also has a designated bar height counter
                <br />
                space that can be used as your bar or breakfast nook,
                <br />
                and can seat three people! Plus, with all the wall to wall
                <br />
                closet space you will have space to store all your belongings!
              </p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6> Owner: {item.name}</h6>
              <h6> for contact: {item.phone}</h6>
              <h6> type:{item.type}</h6>

              <h6> city: {item.city}</h6>
              <h6> street:{item.street}</h6>
              <h6> room number:{item.roomNum}</h6>
              <h6> price:{item.price}</h6>
              {/* <h6> place :{item.}</h6> */}
            </article>
          </div>
        </section>
        <div className="buttonG">
          <Link to="/MainContainer" className="btn-primary">
            Back To The Map~
          </Link>
          <Link
            to={{
              pathname: `/Chat/${item.userUid}`
            }}
            className="btn-primary"
          >
            Message
          </Link>
        </div>
      </div>
    );
  }
}
export default SingleEstate;
