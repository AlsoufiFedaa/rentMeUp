import React from 'react';
import { AuthContext } from '../Components/auth';
import * as firebase from 'firebase';
import { withRouter } from 'react-router-dom';
import './chat.css';
import ReactLoading from 'react-loading';
import ChatBoard from './chatBoard';
import WelcomeBoard from './welcomeBoard';
class Chat extends React.Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      currentPeerUser: null,

      isLoading: true,
    };
    this.listUser = [];

    this.currentUserId = '';
    this.currentUserName = '';
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.currentUserId = user.uid;
        console.log('user', user);
        firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .get()
          .then((doc) => {
            this.currentUserName = doc.data().name;
            console.log(this.currentUserName);
          })
          .catch(function(error) {
            console.log('Error getting documents: ', error);
          });
      } else {
        console.log('not logged in ');
      }
    });
    this.checkLogin();
  }

  checkLogin = () => {
    if (!localStorage.getItem('currentUser')) {
      this.setState({ isLoading: false }, () => {
        this.props.history.push('/');
      });
    } else {
      this.getListUser();
    }
  };

  getListUser = async () => {
    const result = await firebase
      .firestore()
      .collection('users')
      .get();

    if (result.docs.length > 0) {
      this.listUser = [...result.docs];
      this.setState({ isLoading: false });
    }
    console.log(this.listUser);
  };
  renderListUser = () => {
    if (this.listUser.length > 0 && this.currentUserId) {
      let viewListUser = [];
      this.listUser.forEach((item, index) => {
        if (item.data().uid !== this.currentUserId) {
          viewListUser.push(
            <button
              key={index}
              className={
                this.state.currentPeerUser &&
                this.state.currentPeerUser.uid === item.data().uid
                  ? 'viewWrapItemFocused'
                  : 'viewWrapItem'
              }
              onClick={() => {
                this.setState({ currentPeerUser: item.data() });
              }}
            >
              <img
                className="viewAvatarItem"
                src={require('../assets/userPic.png')}
                alt="icon avatar"
              />
              <div className="viewWrapContentItem">
                <span className="textItem">{item.data().name}</span>
              </div>
            </button>
          );
          if (
            !!this.props.match.params.userUid &&
            item.data().uid === this.props.match.params.userUid
          ) {
            this.setState({ currentPeerUser: item.data() });
          } else {
            return null;
          }
        }
      });
      return viewListUser;
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="body">
        <div className="viewListUser"> {this.renderListUser()}</div>
        <div className="viewBoard">
          {this.state.currentPeerUser ? (
            <ChatBoard
              currentPeerUser={this.state.currentPeerUser.uid}
              currentUserId={this.currentUserId}
            />
          ) : (
            <WelcomeBoard currentUserName={this.currentUserName} />
          )}
        </div>
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
}
export default withRouter(Chat);
