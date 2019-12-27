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
// render() {
//     return ( 
//         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452515.63343419787!2d-48.7628643391162!3d-27.615893507935954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952749bfe17eb89f%3A0xd3d6e34c9fba2a18!2sFlorian%C3%B3polis%20-%20State%20of%20Santa%20Catarina%2C%20Brazil!5e0!3m2!1sen!2sus!4v1575391162048!5m2!1sen!2sus" style={{ width: '100%',
//             height: '100%',}}></iframe>
//     )
// }

// }
// export default MainMap;

  

