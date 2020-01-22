import React, { Component } from "react";
import Map from "./mainMap";
import FilterEstates from "./filterEstates";
import { Link } from "react-router-dom";
import { InfoWindow, Marker } from "react-google-maps";

import * as firebase from "firebase";



class MapContainer extends Component {
  state = {
    estates: [],
    sortedEstates: [],
    type: "all",
    city: "",
    street: "",
    price: 100,
    minprice: 0,
    maxprice: 0,
    minspace: 0,
    maxspace: 0,
    roomNum: 1,
    downtown: false,
    overLookingSea: false,
    tempEstates: []
  };

  async componentDidMount() {
    const { estates } = this.state;
    const snapshot = await firebase
      .firestore()
      .collection("estates")
      .get();
    const collection = {};
    snapshot.forEach(doc => {
      collection[doc.id] = doc.data();
      estates.push(collection[doc.id]);
      this.setState({ estates });
      this.setState({ sortedEstates: estates });
    });
    let maxprice = Math.max(...this.state.estates.map(item => item.price));
    let maxspace = Math.max(...this.state.estates.map(item => item.space));
    this.setState({ maxprice, maxspace });
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === "radio" ? target.checked : target.value;
    const name = event.target.name;
    this.setState({ [name]: value }, () => {
      this.filterEstates();
      this.displayMarkers();
    });
  };
  filterEstates = () => {
    let {
      type,
      city,
      street,
      minprice,
      maxspace,
      price,
      minspace,
      maxprice,
      roomNum,
      overLookingSea,
      downtown,
      tempEstates
    } = this.state;
    //all estates
    console.log(this.state.estates);
    // convert to integer
    console.log(
      "type",
      type,
      "city",
      city,
      "rooms",
      roomNum,
      "street",
      street,
      overLookingSea,
      "down",
      downtown
    );
    roomNum = parseInt(roomNum);
    price = parseInt(price);
    const db = firebase.firestore();
    
      if (
        (city !== "all") &
        (type !== "all")
        //  &
        // (roomNum !== 3) &
        // (street !== "") &
        // (price !== minprice)
      ) {
        db.collection("estates")
          .where("type", "==", type)
          .where("city", "==", city)
          // .where("roomNum", "==", roomNum)
          .where("street", "==", street)
          // .where("downtown", "==", downtown)
          // .where("overLookingSea", "==", overLookingSea)
          // .where("price", "==", price)
          // .where("space", "in", [minspace, maxspace])
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              let item = doc.data();
              item.id = doc.id;

              tempEstates.push(item);
            });
          });

        console.log(tempEstates);
        this.setState({ sortedEstates: tempEstates });
      
    }
    //filtering by type
  };

  openInfo = i => {
    const { sortedEstates } = this.state;
    sortedEstates[i].isOpen = true;
    this.setState(sortedEstates);
  };

  displayMarkers = () => {
    console.log(this.state.sortedEstates, "sortedEstates");
    return this.state.sortedEstates.map((item, index) => {
      console.log(item);
      return (
        <>
          {/*Marker*/}

          <Marker
            onClick={() => this.openInfo(index)}
            google={this.props.google}
            name={item.city}
            draggable={false}
            position={{ lat: item.lat + 0.0018, lng: item.lng }}
          >
            {item.isOpen && (
              <InfoWindow
                onClose={this.onInfoWindowClose}
                position={{ lat: item.lat + 0.067, lng: item.lng }}
              >
                <div className="infoWin">
                  <h4 className='infotype'> {item.type}</h4>
                  
                  <img alt="50*50" src={item.url[0]} width="50" height="50" className='imageInfo' />
                  <span style={{ padding: 0, margin: 0 }} className='infoStreet'>{item.street}</span>
                  <h4 className='infoprice'> {item.price}</h4>
                  <Link
                    to={{ pathname: "/SingleEstate", params: { item } }}
                    className="btn-add"
                  >
                    More
                  </Link>
                </div>
              </InfoWindow>
            )}
          </Marker>
        </>
      );
    });
  };

  render() {
    return (
      <div style={{ marginTop: 150 }}>
        <FilterEstates
          type={this.state.type}
          handleChange={this.handleChange}
          city={this.state.city}
          street={this.state.street}
          minprice={this.state.minprice}
          estates={this.state.estates}
          maxprice={this.state.maxprice}
          minspace={this.state.minspace}
          maxspace={this.state.maxspace}
          roomNum={this.state.roomNum}
          downtown={this.state.downtown}
          overLookingSea={this.state.overLookingSea}
          price={this.state.price}
        />
        <Map
          displayMarkers={this.displayMarkers}
          google={this.props.google}
          center={{ lat: 31.3547, lng: 34.3088 }}
          height="300px"
          zoom={9}
        />
      </div>
    );
  }
}
export default MapContainer;
