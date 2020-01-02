import React , {Component} from "react"; 
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MainMap extends Component{
    state={
        estates:[
            
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325}
        ]
    }
    displayMarkers=()=> { 
        return this.state.estates.map((index, item)=>{

            return <Marker id={index} key={index} position={{
                lat: item.latitude, 
                lon:item.longitude
            }}
            onClick={()=> alert("heeey")}/>
        })
    }
    render() {
    return( 
        <>
        <Map
        google={this.props.google}
        defaulttZoom={5}
        style={{  width: '100%',
        height: '100%',}}
        initialCenter={{ lat: 31.354675, lng: 34.308826}}

        > 
        {this.displayMarkers()}
        </Map>

      </> 
    )
}}

export default 
  GoogleApiWrapper({
    apiKey: 'AIzaSyAEi35fry8bHtORqY8JqikhNfMOsD-Yo7E'
  })(MainMap);


  

