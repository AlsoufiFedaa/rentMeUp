import React, {Component} from 'react'
import MainMap from './mainMap'
import FilterEstates from './filterEstates'
import {Marker } from 'google-maps-react';
import AddProperty from './addProperty'
import * as firebase from 'firebase';
class MapContainer extends Component { 

    state={
        estates:[
            
              {latitude: 47.359423, longitude: -122.021071, type:'renting',city:'Rafah',street:'Tariq Bin Zyaed' , price:400, space:'300',roomNum:'4' , overLookingSea:false , downtown:true },
              {latitude: 47.2052192687988, longitude: -121.988426208496, type:'buying', city:'Gaza', street:'Alsinaa', price:15000, space:'700', roomNum:'6', overLookingSea:false , downtown:true},
              {latitude: 47.6307081, longitude: -122.1434325, type:'renting',city:'Khanyonis', street:'Aldhraa', price:500, space:'400', roomNum:'5', overLookingSea:false , downtown:true}
        ], 
        sortedEstates:[],
        type:"all", 
        city: "", 
        street: "", 
        price:100,
        minprice:0, 
        maxprice:0, 
        minspace:0, 
        maxspace:0, 
        roomNum:1, 
       downtown:false, 
       overLookingSea: false

    }
    componentDidMount(){
      var db = firebase.firestore();
     this.state.estates.map(estate=> 
         db.collection("estates").add({ latitude: estate.latitude, 
          longitude :estate.longitude, 
          type: estate.type, 
          city: estate.city, 
          street: estate.street, 
          price:estate.price, 
          space:estate.space, 
          roomNum:estate.roomNum, 
          downtown:estate.downtown, 
          overLookingSea:estate.overLookingSea

      
      }) .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    }))
   
   
      let maxprice = Math.max(...this.state.estates.map(item=> item.price))
      let maxspace = Math.max(...this.state.estates.map(item=> item.space))
      this.setState({maxprice,maxspace })

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
    handleChange=(event)=>{ 
      const target = event.target; 
      const value = target.type ===  'checkbox'? 
      target.checked : target.value;
      const name = event.target.name;
      this.setState({[name]:value}, this.filterEstates);
    };
    filterEstates=()=>{ 
      let {type, city, street, minprice, maxspace, price, minspace,maxprice, roomNum, overLookingSea , downtown} = this.state
      //all estates
      let tempEstates = this.state.estates
      // convert to integer
      roomNum=parseInt(roomNum)
      price = parseInt(price)
      //filter by type
      {if (type!=='all') { 
        tempEstates = tempEstates.filter(estate=> estate.type===type )
      }}
    // filter by city 
    tempEstates = tempEstates.filter(estate=> estate.city === city)
      //filter by street 
    tempEstates = tempEstates.filter(estate=> estate.street=== street)
    // filter by roomNum
     {if (roomNum !==1) { 
        tempEstates = tempEstates.filter(estate=> estate.roomNum===roomNum)
     }}
     //filter by price 
     tempEstates = tempEstates.filter(estate => estate.price <= price );
     // filter by space 
     tempEstates = tempEstates.filter(estate => estate.space>= minspace && estate.space <= maxspace);
     // filter by downtown 
     {if (downtown){ 
        tempEstates = tempEstates.filter(estate => estate.downtown === true);

     }}
    // filter by overlookingSea
    {if (overLookingSea){ 
        tempEstates = tempEstates.filter(estate => estate.overLookingSea === true);

     }}

    //change state
      this.setState({sortedEstates:tempEstates})
      
   
    }
    render(){ 
        return( 
            <div style={{marginTop:150}}>
            <FilterEstates type={this.state.type} handleChange = {this.handleChange} city={this.state.city} street={this.state.street} minprice={this.state.minprice} estates={this.state.estates}
            maxprice={this.state.maxprice} minspace={this.state.minspace} maxspace={this.state.maxspace} roomNum={this.state.roomNum} downtown={this.state.downtown}overLookingSea={this.state.overLookingSea } price={this.state.price} />
            <MainMap displayMarkers={this.displayMarkers}/>
            
            </div>
        );
    }
}
export default MapContainer;