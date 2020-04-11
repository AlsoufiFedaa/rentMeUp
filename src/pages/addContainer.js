import React, { Component } from "react";
import AddProperty from "./addProperty";
class AddContainer extends Component {
  render() {
    return (
      <AddProperty
        google={this.props.google}
        center={{ lat: 31.3547, lng: 34.3088 }}
        height="300px"
        width="50%"
        zoom={9}
      />
    );
  }
}
export default AddContainer;
