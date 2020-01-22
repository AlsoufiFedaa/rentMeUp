import * as firebase from "firebase";
import React, { Component } from "react";
class data extends Component {
  state = {
    feedbacks: []
  };
  async componentDidMount() {
    let feedbacks = this.state;
    const snapshot = await firebase
      .firestore()
      .collection("FeedBacks")
      .get();
    const collection = {};
    snapshot.forEach(doc => {
      collection = doc.data();
      feedbacks.push(collection);
      this.setState({ feedbacks });
      console.log(feedbacks);
    });
  }

  render() {
    let data = { "properties": this.state.feedbacks };
    return data;
  }
}

export default data;
