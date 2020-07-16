import React, { Component } from 'react';
import './welcomeBoard.css';

export default class WelcomeBoard extends Component {
  render() {
    return (
      <div className="viewWelcomeBoard">
        <span className="textTitleWelcome">{`Welcome, ${this.props.currentUserName}`}</span>
        <img
          className="avatarWelcome"
          src={require('../assets/userPic.png')}
          alt="icon avatar"
        />
        <span className="textDesciptionWelcome">
           Here you can find your messages please keep the chat short and for the
          purpose of renting/buying.
        </span>
      </div>
    );
  }
}
