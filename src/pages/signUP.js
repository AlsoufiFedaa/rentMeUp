import React, { Component } from 'react';
import Title from '../Components/Title';
import logo from '../assets/logo1.png';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import { withRouter } from 'react-router-dom';
class SignUP extends Component {
  state = {
    Name: '',
    Email: '',
    Password: '',
    Mobile: '',
  };
  addUser = () => {
    const { Name, Email, Password, Mobile } = this.state;

    const db = firebase.firestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password)
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        // ...
      });
    setTimeout(() => {
      console.log('wait!');
    }, 100000);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db
          .collection('users')
          .doc(user.uid)
          .set({ email: user.email, uid: user.uid, mobile: Mobile, name: Name })
          .catch(function(error) {
            console.error(error);
          }).then = () => {
          console.log('###loginn###');
          this.props.history.push('/HomeLogged');
        };
      }
    });
  };
  handleNameChange = (e) => {
    this.setState({
      Name: e.target.value,
    });
  };
  handleEmailChange = (e) => {
    this.setState({
      Email: e.target.value,
    });
  };
  handlePasswordChange = (e) => {
    this.setState({
      Password: e.target.value,
    });
  };
  handleMobileChange = (e) => {
    this.setState({
      Mobile: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <div
          className="nav-header"
          style={{ marginTop: '40px', marginLeft: '25%' }}
        >
          <Title title="SignUp" />
          <div className="singUp">
            <div className="form-groupp">
              <input
                defaultValue={this.state.Name}
                onChange={this.handleNameChange}
                type="text"
                name="Name"
                id="Name"
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
                name="Email"
                id="Email"
                className="form-control"
                required
              />
              <label className="sl" htmlFor="firstName">
                Email
              </label>
            </div>
            <div className="form-groupp">
              <input
                defaultValue={this.state.Password}
                onChange={this.handlePasswordChange}
                type="password"
                name="Password"
                id="password"
                className="form-control"
                required
              />
              <label className="sl" htmlFor="firstName">
                Password
              </label>
            </div>
            <div className="form-groupp">
              <input
                defaultValue={this.state.Mobile}
                onChange={this.handleMobileChange}
                type="text"
                name="Mobile"
                id="Mobile"
                className="form-control"
                required
              />
              <label className="sl" htmlFor="firstName">
                Mobile
              </label>
            </div>
            <Link
              className="btn-primary"
              onClick={this.addUser}
              to="/HomeLogged"
            >
              Sign Up
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
export default SignUP;
