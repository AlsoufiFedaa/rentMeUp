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
    overLookingSea: false
  };

  async componentDidMount() {
    const { estates } = this.state;
    const snapshot = await firebase
      .firestore()
      .collection("estates")
      .get();

    snapshot.forEach(doc => {
      let data = doc.data();

      data.id = doc.id;
      // collection[doc.id] = doc.data();
      estates.push(data);
      this.setState({ estates });
      this.setState({ sortedEstates: this.state.estates });
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
      // minprice,
      // maxspace,
      price,
      // minspace,
      // maxprice,
      roomNum,
      overLookingSea,
      downtown,
      // tempEstates,
      sortedEstates
    } = this.state;
    //all estates
    console.log(this.state.estates);

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
    // convert to integer
    roomNum = parseInt(roomNum);
    price = parseInt(price);
    console.log("state", type, city, street);
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

            this.state.sortedEstates.push(item);
          });
        });
      this.setState({ sortedEstates });
      console.log(sortedEstates);
      // this.setState({ sortedEstates: this.state.tempEstates });
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
                style={{ width: 150, height: 150 }}
              >
                <div className="infoWin">
                  <div className="estate">
                    <div style={{ flexDirection: "row", alignItems: "center" }}>
                      <img src={item.url[0]} width="70" height="60" />
                      <h4 style={{ color: "gray" }}>
                        {" "}
                        x {item.roomNum} {item.type}
                      </h4>

                      <div className="estateInfoContainer">
                        <h4 style={{ marginLeft: 12 }}> ${item.price}</h4>
                      </div>
                    </div>

                    <Link
                      to={{
                        pathname: `/SingleEstate/${item.id}`
                        // params: { id: item.id }
                      }}
                      className="btn-add"
                    >
                      More
                    </Link>
                  </div>
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
