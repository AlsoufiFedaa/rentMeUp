import React, { Component } from "react";
import Modal from "react-modal";
import * as firebase from "firebase";
import { AuthContext } from "../Components/auth";
import { FaRocketchat } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "0",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
export default class ChatModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      chats: [],
      content: "",
      readError: null,
      writeError: null,
      modalIsOpen: false
    };
  }
  async componentDidMount() {
    this.setState({ readError: null });
    const { chats } = this.state;
    const snapshot = await firebase
      .firestore()
      .collection("messages")
      .get();
    const collection = {};
    snapshot.forEach(doc => {
      collection[doc.id] = doc.data();
      chats.push(collection[doc.id]);
      this.setState({ chats });
    });
  }

  static contextType = AuthContext;
  componentWillMount() {
    const { currentUser } = this.context;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setState({ user: currentUser });
  }
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleChange = event => {
    this.setState({
      content: event.target.value
    });
  };
  async handleSubmit(event) {
    console.log("content", this.state.content);
    event.preventDefault();
    this.setState({ writeError: null });

    var db = firebase.firestore();

    db.collection("messages")
      .add({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.uid
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });

    this.setState({ content: "" });
    console.log(this.state.content);
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal} className="btn-primary">
          <FaRocketchat />
          <div></div>
          Message
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Message"
        >
          <div className="form-group">
            <div className="chats">
              {this.state.chats.map(chat => {
                return <p key={chat.timestamp}>{chat.content}</p>;
              })}
            </div>
            {/* {# message form #} */}
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={this.handleChange}
                value={this.state.content}
              ></input>
              {this.state.error ? <p>{this.state.writeError}</p> : null}
              <button type="submit" className="btn-primary">
                <FaUnderline />
                Send
              </button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}
