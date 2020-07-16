import moment from 'moment';
import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import './chatBoard.css';
import * as firebase from 'firebase';

export default class ChatBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      inputValue: '',
    };

    this.listMessage = [];
    this.currentPeerUser = this.props.currentPeerUser;
    this.groupChatId = null;
    this.removeListener = null;
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentDidMount() {
    // For first render, it's not go through componentWillReceiveProps
    this.getListHistory();
  }

  componentWillUnmount() {
    if (this.removeListener) {
      this.removeListener();
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentPeerUser) {
      this.currentPeerUser = newProps.currentPeerUser;
      this.getListHistory();
    }
  }

  getListHistory = () => {
    if (this.removeListener) {
      this.removeListener();
    }
    this.listMessage.length = 0;
    this.setState({ isLoading: true });
    if (
      this.hashString(this.props.currentUserId) <=
      this.hashString(this.currentPeerUser.uid)
    ) {
      this.groupChatId = `${this.props.currentUserId}-${this.currentPeerUser.uid}`;
    } else {
      this.groupChatId = `${this.currentPeerUser.uid}-${this.props.currentUserId}`;
    }

    // Get history and listen new data added
    this.removeListener = firebase
      .firestore()
      .collection('chats')
      .doc(this.groupChatId)
      .collection(this.groupChatId)
      .onSnapshot(
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              this.listMessage.push(change.doc.data());
            }
          });
          this.setState({ isLoading: false });
        },
        (err) => {
          console.log(err);
        }
      );
  };

  onSendMessage = (content, type) => {
    if (content.trim() === '') {
      return;
    }

    const timestamp = moment()
      .valueOf()
      .toString();

    const itemMessage = {
      idFrom: this.props.currentUserId,
      idTo: this.currentPeerUser.uid,
      timestamp: timestamp,
      content: content.trim(),
      type: type,
    };

    firebase
      .firestore()
      .collection('chats')
      .doc(this.groupChatId)
      .collection(this.groupChatId)
      .doc(timestamp)
      .set(itemMessage)
      .then(() => {
        this.setState({ inputValue: '' });
      })
      .catch((err) => {});
  };

  onKeyboardPress = (event) => {
    if (event.key === 'Enter') {
      this.onSendMessage(this.state.inputValue, 0);
    }
  };

  scrollToBottom = () => {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({});
    }
  };

  render() {
    return (
      <div className="viewChatBoard">
        {/* Header */}
        <div className="headerChatBoard">
          <img
            className="viewAvatarItem"
            src={require('../assets/userPic.png')}
            alt="icon avatar"
          />
          <span className="textHeaderChatBoard">
            {this.currentPeerUser.name}
          </span>
        </div>

        {/* List message */}
        <div className="viewListContentChat">
          {this.renderListMessage()}
          <div
            style={{ float: 'left', clear: 'both' }}
            ref={(el) => {
              this.messagesEnd = el;
            }}
          />
        </div>

        {/* View bottom */}
        <div className="viewBottom">
          <input
            className="viewInput"
            placeholder="Type your message..."
            value={this.state.inputValue}
            onChange={(event) => {
              this.setState({ inputValue: event.target.value });
            }}
            onKeyPress={this.onKeyboardPress}
          />
          <img
            className="icSend"
            src={require('../assets/ic_send.png')}
            alt="icon send"
            onClick={() => this.onSendMessage(this.state.inputValue, 0)}
          />
        </div>

        {/* Loading */}
        {this.state.isLoading ? (
          <div className="viewLoading">
            <ReactLoading
              type={'spin'}
              color={'#203152'}
              height={'3%'}
              width={'3%'}
            />
          </div>
        ) : null}
      </div>
    );
  }

  renderListMessage = () => {
    if (this.listMessage.length > 0) {
      let viewListMessage = [];
      this.listMessage.forEach((item, index) => {
        if (item.idFrom === this.props.currentUserId) {
          // Item right (my message)
          if (item.type === 0) {
            viewListMessage.push(
              <div className="viewItemRight" key={item.timestamp}>
                <span className="textContentItem">{item.content}</span>
              </div>
            );
          } else if (item.type === 1) {
            viewListMessage.push(
              <div className="viewItemRight2" key={item.timestamp}>
                <img
                  className="imgItemRight"
                  src={item.content}
                  alt="content message"
                />
              </div>
            );
          } else {
            viewListMessage.push(
              <div className="viewItemRight3" key={item.timestamp}>
                <img
                  className="imgItemRight"
                  src={this.getGifImage(item.content)}
                  alt="content message"
                />
              </div>
            );
          }
        } else {
          // Item left (peer message)
          if (item.type === 0) {
            viewListMessage.push(
              <div className="viewWrapItemLeft" key={item.timestamp}>
                <div className="viewWrapItemLeft3">
                  {this.isLastMessageLeft(index) ? (
                    <img
                      src={require('../assets/userPic.png')}
                      alt="avatar"
                      className="peerAvatarLeft"
                    />
                  ) : (
                    <div className="viewPaddingLeft" />
                  )}
                  <div className="viewItemLeft">
                    <span className="textContentItem">{item.content}</span>
                  </div>
                </div>
                {this.isLastMessageLeft(index) ? (
                  <span className="textTimeLeft">
                    {moment(Number(item.timestamp)).format('ll')}
                  </span>
                ) : null}
              </div>
            );
          } else if (item.type === 1) {
            viewListMessage.push(
              <div className="viewWrapItemLeft2" key={item.timestamp}>
                <div className="viewWrapItemLeft3">
                  {this.isLastMessageLeft(index) ? (
                    <img
                      src={require('../assets/userPic.png')}
                      alt="avatar"
                      className="peerAvatarLeft"
                    />
                  ) : (
                    <div className="viewPaddingLeft" />
                  )}
                  <div className="viewItemLeft2">
                    <img
                      className="imgItemLeft"
                      src={item.content}
                      alt="content message"
                    />
                  </div>
                </div>
                {this.isLastMessageLeft(index) ? (
                  <span className="textTimeLeft">
                    {moment(Number(item.timestamp)).format('ll')}
                  </span>
                ) : null}
              </div>
            );
          } else {
            viewListMessage.push(
              <div className="viewWrapItemLeft2" key={item.timestamp}>
                <div className="viewWrapItemLeft3">
                  {this.isLastMessageLeft(index) ? (
                    <img
                      src={require('../assets/userPic.png')}
                      alt="avatar"
                      className="peerAvatarLeft"
                    />
                  ) : (
                    <div className="viewPaddingLeft" />
                  )}
                  <div className="viewItemLeft3" key={item.timestamp}>
                    <img
                      className="imgItemLeft"
                      src={this.getGifImage(item.content)}
                      alt="content message"
                    />
                  </div>
                </div>
                {this.isLastMessageLeft(index) ? (
                  <span className="textTimeLeft">
                    {moment(Number(item.timestamp)).format('ll')}
                  </span>
                ) : null}
              </div>
            );
          }
        }
      });
      return viewListMessage;
    } else {
      return (
        <div className="viewWrapSayHi">
          <span className="textSayHi">Keep it formal</span>
          <img
            className="imgWaveHand"
            src={require('../assets/ic_wave_hand.png')}
            alt="wave hand"
          />
        </div>
      );
    }
  };

  hashString = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash += Math.pow(str.charCodeAt(i) * 31, str.length - i);
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  };

  isLastMessageLeft(index) {
    if (
      (index + 1 < this.listMessage.length &&
        this.listMessage[index + 1].idFrom === this.props.currentUserId) ||
      index === this.listMessage.length - 1
    ) {
      return true;
    } else {
      return false;
    }
  }

  isLastMessageRight(index) {
    if (
      (index + 1 < this.listMessage.length &&
        this.listMessage[index + 1].idFrom !== this.props.currentUserId) ||
      index === this.listMessage.length - 1
    ) {
      return true;
    } else {
      return false;
    }
  }
}
