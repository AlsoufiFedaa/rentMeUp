import React, { Component } from "react";
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps";

class MainMap extends Component {
  render() {
    const AsyncMap = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          google={this.props.google}
          defaultZoom={8}
          defaultCenter={{ lat: 31.3547, lng: 34.3088 }}
          style={{ width: "100%", height: "210px" }}
        >
          {this.props.displayMarkers()}
        </GoogleMap>
      ))
    );
    // let map;
    // return (map = (
    //   <AsyncMap
    //     googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    //     // googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBULzIYzPa6iu71pBykX_a9E8vseUOf91Y&libraries=places"
    //     loadingElement={<div style={{ height: `100%` }} />}
    //     containerElement={<div style={{ height: this.props.height }} />}
    //     mapElement={<div style={{ height: `100%` }} />}
    //   />
    // ));
    return (
      <AsyncMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        // googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBULzIYzPa6iu71pBykX_a9E8vseUOf91Y&libraries=places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: this.props.height }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default MainMap;
