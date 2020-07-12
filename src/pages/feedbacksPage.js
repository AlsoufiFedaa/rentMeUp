
import React, { Component } from "react";
import data from "./data";
import Card from "../Components/Card";
import Title from "../Components/Title";

import * as firebase from "firebase";


class Feedbacks extends Component {
  state = {
    feedbacks: [],
    properties: data.properties,
    property: data.properties[ 0 ]
  };

  async componentDidMount() {
    let { feedbacks, properties, property } = this.state;
    const snapshot = await firebase
      .firestore()
      .collection('FeedBacks')
      .get();
    const collection = {};

    let index = 0;
    snapshot.forEach((doc) => {
      collection[doc.id] = doc.data();
      collection[doc.id].index = index;
      feedbacks.push(collection[doc.id]);

      this.setState({ feedbacks });
      index = index + 1;
    });

    console.log(feedbacks);

    this.setState({ properties: feedbacks });

    //this.setState({ property: this.state.properties[0] });
    {
      feedbacks.map((item) =>
        item.index == 0
          ? this.setState({ property: item })
          : console.log('not ')
      );
    }

  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    const { properties } = this.state;
    this.setState({
      property: properties[ newIndex ]
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    const { properties } = this.state;
    this.setState({
      property: properties[ newIndex ]
    });
  };

  render() {
    const { properties, property } = this.state;

    return (
      <div className="feed" style={{ marginTop: '70px' }}>
        <div className="page">
          <section>
            <Title title="Feedbacks!" />
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => this.prevProperty()}
                disabled={property.index === 0}
                className="btn-primary"
              >
                Prev
              </button>
              <button
                onClick={() => this.nextProperty()}
                disabled={property.index === properties.length - 1}
                className="btn-primary"
              >
                Next
              </button>
            </div>
          </section>

          <div className="col">
            <div className={`cards-slider active-slide-${property.index}`}>
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${property.index *
                    (100 / properties.length)}%)`,
                }}
              >
                {properties.map((property) => (
                  <Card property={property} />
                ))}
              </div>
            </div>
          </div>

          {/* <Columns
            queries={this.queries}
            style={{
              justifyContent: "center",
            }}
          >
            {this.state.feedbacks.map((data, i) => {
              return (
                <Card
                  bg="light"
                  text="dark"
                  className="text-center"
                  style={{
                    marginLeft: "20px",
                    marginTop: "10px",
                    justifyContent: "center",
                    borderColor:'#af9a7d',
                    borderWidth:'4px'
                  }}
                  key={i}
                  border="secondary"
                >
                  <Card.Img variant="top" src={userPic} />
                  <Card.Body>
                    <Card.Title
                      text="dark"
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      {data.name}
                    </Card.Title>
                    <Card.Text> {data.massage}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
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
                      initialRating={data.rating}
                      fullSymbol={
                        <img
                          src={fullStar}
                          className="icon"
                          width="30"
                          height="30"
                          alt="Fullstar"
                        />
                      }
                      readonly
                    />
                  </Card.Footer>
                </Card>
              );
            })}
          </Columns> */}
        </div>
      </div>
    );
  }
}

export default Feedbacks;