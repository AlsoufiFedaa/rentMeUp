import React , {Component} from "react"; 
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MainMap extends Component{
    state={
        estates:[
           
              {latitude: 37.778519, longitude: -122.405640},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 31.354675, longitude: 34.308826}
        ]
    }
    displayMarkers=()=> { 
        return this.state.estates.map(( item,index)=>{

            return <Marker id={index} key={index} position={{
                lat: item.latitude, 
                lng:item.longitude
            }}
            onClick={()=> alert("heeey")}/>
        })
    }
    render() {

        console.log(this.state.estates)
    return( 
        <>
        <Map
        google={this.props.google}
        defaulttZoom={5}
        style={{  width: '100%',
        height: '100%',}}
        initialCenter={{ lat: 31.354675, lng: -122.405640}}

        > 

{
this.displayMarkers()

}
        </Map>

      </> 
    )
}}

export default 
  GoogleApiWrapper({
    apiKey: 'AIzaSyAEi35fry8bHtORqY8JqikhNfMOsD-Yo7E'
  })(MainMap);


  

