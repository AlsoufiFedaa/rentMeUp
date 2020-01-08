import React, {Component} from 'react'
import Map from './mainMap'
import FilterEstates from './filterEstates'
import {Marker } from 'google-maps-react';

import * as firebase from 'firebase';
import AddProperty from './addProperty';
//NeedToDo
// read from firebase/database 
class MapContainer extends Component { 

    state={
        estates:[
            
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
      // const snapshot =  firebase.firestore().collection('estates').get()
      // console.log(snapshot)
      // return snapshot.docs.map( 
      //   doc => {
        
        
      //   console.log(doc.data())
        
      // } );
          //  let db = firebase.firestore();

          // let docRef = db.collection("estates").get()
          // console.log(docRef)

    

      // Get a document, forcing the SDK to fetch from the offline cache.
      // docRef.docs.map( doc => console.log(doc.data()))

      // var db = firebase.firestore();
      // var docRef = db.collection("estate").get().then(querySnapshot => {
      //   querySnapshot.docs.map(doc => {
      //     console.log('LOG 1', doc.data());
      //   });
      // });
     
   
  
      // let maxprice = Math.max(...this.state.estates.map(item=> item.price))
      // let maxspace = Math.max(...this.state.estates.map(item=> item.space))
      // this.setState({maxprice,maxspace })

    }


    async componentWillMount() {
      const {estates} = this.state;
      const snapshot = await firebase.firestore().collection('estates').get()
      const collection = {};
      snapshot.forEach(doc => {
          collection[doc.id] = doc.data();
          estates.push(collection[doc.id])
          this.setState({estates})
         
      });
      
    
    console.log(estates)

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
            <Map/>
            
            </div>
        );
    }
}
export default MapContainer;