// firebase.auth().signOut().then(function() {
//   console.log('Signed Out');
// }, function(error) {
//   console.error('Sign Out Error', error);
// });

// var Rating = require('react-rating');
//<Rating rating={4} total={5}/>
// rating={2} total={5} interactive={false}

// const Up = () => {
//   firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//       return (
//         <div className="uName">
//           <img
//             style={{ height: 30, width: 30, alignSelf: "center" }}
//             src={require("../assets/userPic.png")}
//           />
//           <h4
//             style={{
//               marginLeft: 10,
//               marginTop: 25
//             }}
//           >
//             {this.state.name}
//           </h4>
//         </div>
//       );
//     } else {
//       return <div></div>;
//     }
//   });
// };
//  filterEstates = () => {
//   let {
//     type,
//     city,
//     street,
//     minprice,
//     maxspace,
//     price,
//     minspace,
//     maxprice,
//     roomNum,
//     overLookingSea,
//     downtown
//   } = this.state;
//   //all estates
//   let tempEstates = this.state.estates;

//   // convert to integer
//   roomNum = parseInt(roomNum);
//   price = parseInt(price);
//   //filter by type
//   {
//     if (type !== "all") {
//       tempEstates = tempEstates.filter(estate => estate.type === type);
//     }
//   }
//   // filter by city
//   {
//     if (city !== "all") {
//       tempEstates = tempEstates.filter(estate => estate.city === city);
//     }
//   }
//   //filter by street
//   {
//     if (street !== "all") {
//       tempEstates = tempEstates.filter(estate => estate.street === street);
//     }
//   }
//   // filter by roomNum
//   {
//     if (roomNum !== 1) {
//       tempEstates = tempEstates.filter(estate => estate.roomNum === roomNum);
//     }
//   }
//   //filter by price
//   {
//     if (minprice !== 0) {
//       tempEstates = tempEstates.filter(estate => estate.price <= price);
//     }
//   }
//   // filter by space
//   {
//     if (minspace !== 0) {
//       tempEstates = tempEstates.filter(
//         estate => estate.space >= minspace && estate.space <= maxspace
//       );
//     }
//   }
//   // filter by downtown
//   {
//     if (downtown) {
//       tempEstates = tempEstates.filter(estate => estate.downtown === true);
//     }
//   }
//   // filter by overlookingSea
//   {
//     if (overLookingSea) {
//       tempEstates = tempEstates.filter(
//         estate => estate.overLookingSea === true
//       );
//     }
//   }

//   //change state
//   this.setState({ sortedEstates: tempEstates });
// };

// console.log(item)
// return (
//   <>
// <Marker id={index} key={index}

// position={{
//    lat: item.lat,
//     lng:item.lng

// }}
//  onClick={()=> alert("heeey")}/>

{
  /* <InfoWindow onClose={this.onInfoWindowClose}>
<div>
  <h1>{item.address}</h1>
</div>
</InfoWindow> */
}

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
