import React, { Component } from "react";
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps";
import Map, { NavigationControl, GeolocateControl } from "react-map-gl";

const mapbox_token =
  "pk.eyJ1IjoiYWxzb3VmaWZlZGFhIiwiYSI6ImNrYXduYmI2aTA3YTkyeG16OHBwbDNzdDUifQ.ZxjTEapzP3bpUpR4-ZtvVw";
class MainMap extends Component {
  state = {
    viewport: {
      width: "100wv",
      height: "100vh",
      zoom: 10,

      latitude: 31.4547,
      longitude: 34.4088
    }
  };

  render() {
    const { viewport } = this.state;

    let map;
    return (map = (
      <Map
        {...viewport}
        mapStyle="mapbox://styles/mapbox/light-v10"
        //"mapbox://styles/alsoufifedaa/ckb7spkum0h761io0nsihnbuj"
        mapboxApiAccessToken={mapbox_token}
        onViewportChange={viewport => {
          this.setState({ viewport: viewport });
        }}
      >
        {/* <GeolocateControl /> */}
        {/* <NavigationControl showCompass={true} showZoom={true}  mapStyle={{back}}/> */}
        {this.props.displayMarkers()}
      </Map>
    ));
  }
}

export default MainMap;
