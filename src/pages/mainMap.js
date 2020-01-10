import React , {Component} from "react"; 
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps";

class MainMap extends Component{
   
    render() {


      const AsyncMap = withScriptjs(
        withGoogleMap(
          props => (


       <GoogleMap
       google={ this.props.google }
       defaultZoom={ 9 }
       defaultCenter={{lat: 31.3547, lng: 34.3088}}
       style={{  width: '100%',
       height: '100%',}}
       

       > 


{    this.props.displayMarkers()
}

       </GoogleMap>

)
)
);
let map;
    return( 
      map= 
      <AsyncMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0&libraries=places"
      loadingElement={
        <div style={{ height: `100%` }} />
      }
      containerElement={
        <div style={{ height: this.props.height }} />
      }
      mapElement={
        <div style={{ height: `100%` }} />
      }
    />

 
    )
}}

export default MainMap;


  

