import React, { Component } from "react";
class Profile extends Component {
  state = {
    Name: "",
    Email: "",
    Password: "",
    Mobile: ""
  };

  handleChange1 = e => {
    this.setState({
      Name: e.target.value
    });
  };
  handleChange2 = e => {
    this.setState({
      Email: e.target.value
    });
  };
  handleChange3 = e => {
    this.setState({
      Password: e.target.value
    });
  };
  handleChange4 = e => {
    this.setState({
      Mobile: e.target.value
    });
  };

  render() {
    return (
      <div>
        <div className="nav-header">
          <h1 style={{ marginTop: "180px" }}>Profile</h1>
        </div>
        <div className="input">
          <h1>{this.state.name}</h1>
          <h3>Name:</h3>
          <input
            defaultValue={this.state.Name}
            onChange={this.handleTextChange1}
            placeholder="enter ur Name"
          />
        </div>
        <div className="input">
          <h3>Email:</h3>
          <input
            defaultValue={this.state.Email}
            onChange={this.handleTextChange2}
            placeholder="enter ur Email"
          />
        </div>
        <div className="input">
          <h3>Password:</h3>
          <input
            defaultValue={this.state.Password}
            onChange={this.handleTextChange3}
            placeholder="enter ur Password"
          />
        </div>
        <div className="input">
          <h3>Mobil:</h3>
          <input
            defaultValue={this.state.Mobile}
            onChange={this.handleTextChange4}
            placeholder="enter ur Mobil"
          />
        </div>
        <Link to="/Profile" className="btn-primary">
          Sign Up
        </Link>
      </div>
    );
  }
}
export default Profile;
