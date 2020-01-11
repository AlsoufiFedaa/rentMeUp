import React, { Component } from "react";
import * as firebase from "firebase";
class Fire extends Component {
  addUsers = () => {
    console.log("Im working");
    var db = firebase.firestore();

    db.collection("users")
      .add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };
  render() {
    return <button onClick={this.addUsers}> Add User</button>;
  }
}
export default Fire;
