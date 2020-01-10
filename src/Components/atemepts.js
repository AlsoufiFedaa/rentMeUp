


// import React, { Component } from "react";
// import Map from "./mainMap";
// import FilterEstates from "./filterEstates";
// import { Link } from "react-router-dom";
// import { InfoWindow, Marker } from "react-google-maps";

// import * as firebase from "firebase";

// //NeedToDo
// // read from firebase/database
// class MapContainer extends Component {
//   state = {
//     estates: [],
//     sortedEstates: [],
//     type: "all",
//     city: "",
//     street: "",
//     price: 100,
//     minprice: 0,
//     maxprice: 0,
//     minspace: 0,
//     maxspace: 0,
//     roomNum: 1,
//     downtown: false,
//     overLookingSea: false
//   };

//   async componentDidMount() {
//     const { estates, sortedEstates } = this.state;
//     const snapshot = await firebase
//       .firestore()
//       .collection("estates")
//       .get();
//     const collection = {};
//     snapshot.forEach(doc => {
//       collection[doc.id] = doc.data();
//       estates.push(collection[doc.id]);
//       this.setState({ estates });
//       this.setState({ sortedEstates: estates });
//       console.log(sortedEstates);
//     });
//     let maxprice = Math.max(...this.state.estates.map(item => item.price));
//     let maxspace = Math.max(...this.state.estates.map(item => item.space));
//     this.setState({ maxprice, maxspace });
//   }

//   handleChange = event => {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = event.target.name;
//     this.setState({ [name]: value }, () => {
//       this.filterEstates();
//       this.displayMarkers();
//     });
//   };
//   filterEstates = () => {
//     let {
//       type,
//       city,
//       street,
//       minprice,
//       maxspace,
//       price,
//       minspace,
//       maxprice,
//       roomNum,
//       sortedEstates,
//       overLookingSea,
//       downtown
//     } = this.state;
//     //all estates
//     let tempEstates = this.state.estates;

//     // convert to integer
//     roomNum = parseInt(roomNum);
//     price = parseInt(price);
//     //filter by type
//     {
//       if (type !== "all") {
//         tempEstates = tempEstates.filter(estate => estate.type === type);
//       }
//     }
//     // filter by city
//     {
//       if (city !== "all") {
//         tempEstates = tempEstates.filter(estate => estate.city === city);
//       }
//     }
//     //filter by street
//     {
//       if (street !== "all") {
//         tempEstates = tempEstates.filter(estate => estate.street === street);
//       }
//     }
//     // filter by roomNum
//     {
//       if (roomNum !== 1) {
//         tempEstates = tempEstates.filter(estate => estate.roomNum === roomNum);
//       }
//     }
//     //filter by price
//     {
//       if (minprice !== 0) {
//         tempEstates = tempEstates.filter(estate => estate.price <= price);
//       }
//     }
//     // filter by space
//     {
//       if (minspace !== 0) {
//         tempEstates = tempEstates.filter(
//           estate => estate.space >= minspace && estate.space <= maxspace
//         );
//       }
//     }
//     // filter by downtown
//     {
//       if (downtown) {
//         tempEstates = tempEstates.filter(estate => estate.downtown === true);
//       }
//     }
//     // filter by overlookingSea
//     {
//       if (overLookingSea) {
//         tempEstates = tempEstates.filter(
//           estate => estate.overLookingSea === true
//         );
//       }
//     }

//     //change state

//     this.setState({ sortedEstates: tempEstates });
//   };

//   displayMarkers = () => {
//     this.state.sortedEstates.map((item, index) => {
//       return (
//         <>
//           <InfoWindow
//             onClose={this.onInfoWindowClose}
//             position={{ lat: item.lat + 0.067, lng: item.lng }}
//           >
//             <div className="infoWin">
//               <h4> {item.type}</h4>
//               <span style={{ padding: 0, margin: 0 }}>{item.street}</span>
//               <img src={item.url[0]} width="50" height="50" />
//               <h4> {item.price}</h4>
//               <Link
//                 to={{ pathname: "/SingleEstate", params: { item } }}
//                 className="btn-add"
//               >
//                 More
//               </Link>
//             </div>
//           </InfoWindow>
//           {/*Marker*/}
//           <Marker
//             google={this.props.google}
//             name={item.city}
//             draggable={false}
//             position={{ lat: item.lat + 0.0018, lng: item.lng }}
//           />
//         </>
//       );
//     });
//   };

//   render() {
//     return (
//       <div style={{ marginTop: 150 }}>
//         <FilterEstates
//           type={this.state.type}
//           handleChange={this.handleChange}
//           city={this.state.city}
//           street={this.state.street}
//           minprice={this.state.minprice}
//           estates={this.state.estates}
//           maxprice={this.state.maxprice}
//           minspace={this.state.minspace}
//           maxspace={this.state.maxspace}
//           roomNum={this.state.roomNum}
//           downtown={this.state.downtown}
//           overLookingSea={this.state.overLookingSea}
//           price={this.state.price}
//         />
//         <Map
//           displayMarkers={this.displayMarkers}
//           google={this.props.google}
//           center={{ lat: 31.3547, lng: 34.3088 }}
//           height="300px"
//           zoom={9}
//         />
//       </div>
//     );
//   }
// }
// export default MapContainer;

// console.log(item)
// return (
//   <>
// <Marker id={index} key={index} 

// position={{
//    lat: item.lat, 
//     lng:item.lng

// }}
//  onClick={()=> alert("heeey")}/>

{/* <InfoWindow onClose={this.onInfoWindowClose}>
<div>
  <h1>{item.address}</h1>
</div>
</InfoWindow> */}      
           
           
           
           // <div>
            //   <InfoWindow
						// 	onClose={this.onInfoWindowClose}
						// 	position={{ lat: ( item.lat + 0.0018 ), lng: item.lng}}
						// >
						// 	<div>
						// 		<span style={{ padding: 0, margin: 0 }}>{ item.street }</span>
						// 	</div>
						// </InfoWindow>
            // <Marker id={index} key={index} 
            // google={this.props.google}
            // position={{
            //     lat: item.lat, 
            //     lng:item.lng

            // }}
            // onClick={()=> alert("heeey")}/>
            // </div>


// placeholder="city"  value= {this.state.city} onChange={this.updateValueCity} className='City'


// value={this.state.province} onChange={this.updateValueProvince} className='Province'


// state={
//     estates:[
       
//           {latitude: 37.778519, longitude: -122.405640},
//           {latitude: 47.2052192687988, longitude: -121.988426208496},
//           {latitude: 47.6307081, longitude: -122.1434325},
//           {latitude: 31.354675, longitude: 34.308826}
//     ]
// }
// displayMarkers=()=> { 
//     return this.state.estates.map(( item,index)=>{

//         return <Marker id={index} key={index} position={{
//             lat: item.latitude, 
//             lng:item.longitude
//         }}
//         onClick={()=> alert("heeey")}/>
//     })
// }