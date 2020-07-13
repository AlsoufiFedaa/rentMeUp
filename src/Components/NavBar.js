import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import logo from '../assets/logo1.png';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import { AuthContext } from '../Components/auth';
import { withRouter } from 'react-router-dom';
// const Up = () => {
//   firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//       return (
//         <div className="uName">
//           <img
//             style={{ height: 30, width: 30, alignSelf: "center" }}
//             src={require("../assets/userPic.png")}
//           />
//           <h4
//             style={{
//               marginLeft: 10,
//               marginTop: 25
//             }}
//           >
//             {this.state.name}
//           </h4>
//         </div>
//       );
//     } else {
//       return <div></div>;
//     }
//   });
// };
class NavBar extends Component {
  state = {
    isOPen: false,
    name: '',
    loggedin: null,
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.uid);
        this.setState({ loggedin: true });
        firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .get()
          .then((doc) => {
            this.setState({ name: doc.data().name });
            console.log(doc.data(), 'name ogf uesr');
          })
          .catch(function(error) {
            console.log('Error getting documents: ', error);
          });
      } else {
        console.log('not logged in ');
        // User not logged in or has just logged out.
      }
    });
  }
  static contextType = AuthContext;
  handleToggle = () => {
    this.setState({ isOPen: !this.state.isOPen });
  };
  SignOut = () => {
    const { currentUser, setCurrentUser } = this.context;

    if (currentUser) {
      return firebase
        .auth()
        .signOut()
        .then(function() {
          console.log('sign out ');
          window.location.reload(false);
          alert('sign out successfully');

          localStorage.clear();
          this.props.history.push('/');
          setCurrentUser(null);
          console.log(currentUser);
        })
        .catch(function(error) {
          console.log('An error happened.');
        });
    } else {
      return alert('Log In first');
    }
  };
  render() {
    let info;
    if (this.state.loggedin) {
      info = (
        <div className="uName">
          <img
            style={{ height: 30, width: 30, alignSelf: 'center' }}
            src={require('../assets/userPic.png')}
          />
          <h4
            style={{
              marginLeft: 10,
              marginTop: 25,
            }}
          >
            {this.state.name}
          </h4>
        </div>
      );
    } else {
      info = <div></div>;
    }
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img className="navImg" src={logo} alt="rentmeUp" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOPen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/contactUs"> Contact</Link>
            </li>
            <li>
              <Link to="/Feedbacks"> Feedbacks</Link>
            </li>
            <li className="singOut">
              <Link onClick={this.SignOut} to="/">
                Sign Out
              </Link>
            </li>
          </ul>
          <div>{info}</div>
        </div>
        <div></div>
      </nav>
    );
  }
}
export default NavBar;
