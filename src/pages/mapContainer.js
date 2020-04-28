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
    prev_infowindow: 0,
    newEstates: [],
    query: firebase.firestore().collection("estates")
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
      sortedEstates,
      newEstates,
      query
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

    if (city !== "all") {
      query = query
        .where("city", "==", city)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            let data = doc.data();

            data.id = doc.id;
            newEstates.push(data);
            this.setState({ newEstates });
            this.setState({ sortedEstates: newEstates });
            this.setState({ newEstates: [] });
          });
        });
    }
    if (type !== "all") {
      query = query
        .where("type", "==", type)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            let data = doc.data();

            data.id = doc.id;
            newEstates.push(data);
            this.setState({ newEstates });
            this.setState({ sortedEstates: newEstates });
            this.setState({ newEstates: [] });
          });
          console.log("sorted", this.state.newEstates);
        });
    }
  };

  openInfo = i => {
    const { prev_infowindow } = this.state;
    const { sortedEstates } = this.state;
    sortedEstates[i].isOpen = true;

    this.setState(sortedEstates);
    if (this.state.prev_infowindow != i) {
      sortedEstates[prev_infowindow].isOpen = false;
      this.setState({ prev_infowindow: i });
    }
    this.setState({ prev_infowindow: i });
  };

  displayMarkers = () => {
    console.log(this.state.sortedEstates, "sortedEstates");
    console.log("lenght", this.state.sortedEstates.length == "object");
    if (this.state.sortedEstates.length != "undefined") {
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
              icon={{
                url: require("../assets/Webp.net-resizeimage.png"),
                scaledSize: new window.google.maps.Size(35, 35)
              }}
            >
              {/* <img
              alt="50*50"
              src={require("../assets/Webp.net-resizeimage.png")}
              width="50"
              height="50"
            /> */}
              {item.isOpen && (
                <InfoWindow
                  onClose={this.onInfoWindowClose}
                  position={{ lat: item.lat + 0.067, lng: item.lng }}
                  style={{ width: 150, height: 150 }}
                >
                  <div className="infoWin">
                    <h4 className="infotype"> {item.type}</h4>
                    <img
                      alt="50*50"
                      src={item.url[0]}
                      width="50"
                      height="50"
                      className="imageInfo"
                    />
                    <span
                      style={{ padding: 0, margin: 0 }}
                      className="infoStreet"
                    >
                      {item.street}
                    </span>
                    <h4 className="infoprice"> {item.price}</h4>
                          
                    <Link
                      to={{
                        pathname: `/SingleEstate/${item.id}`
                      }}
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
    } else {
      return (
        <>
          {/*Marker*/}

          <Marker
            onClick={() => this.openInfo(this.state.sortedEstates.index)}
            google={this.props.google}
            name={this.state.sortedEstates.city}
            draggable={false}
            position={{
              lat: this.state.sortedEstates.lat + 0.0018,
              lng: this.state.sortedEstates.lng
            }}
            icon={{
              url: require("../assets/Webp.net-resizeimage.png"),
              scaledSize: new window.google.maps.Size(35, 35)
            }}
          >
            {/* <img
            alt="50*50"
            src={require("../assets/Webp.net-resizeimage.png")}
            width="50"
            height="50"
          /> */}
            {this.state.sortedEstates.isOpen && (
              <InfoWindow
                onClose={this.onInfoWindowClose}
                position={{
                  lat: this.state.sortedEstates.lat + 0.067,
                  lng: this.state.sortedEstates.lng
                }}
                style={{ width: 150, height: 150 }}
              >
                <div className="infoWin">
                  <h4 className="infotype"> {this.state.sortedEstates.type}</h4>
                  <img
                    alt="50*50"
                    src={this.state.sortedEstates.url[0]}
                    width="50"
                    height="50"
                    className="imageInfo"
                  />
                  <span
                    style={{ padding: 0, margin: 0 }}
                    className="infoStreet"
                  >
                    {this.state.sortedEstates.street}
                  </span>
                  <h4 className="infoprice">
                    {" "}
                    {this.state.sortedEstates.price}
                  </h4>
                        
                  <Link
                    to={{
                      pathname: `/SingleEstate/${this.state.sortedEstates.id}`
                    }}
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
    }
  };

  render() {
    return (
      <div>
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
          height="500px"
          zoom={9}
        />
      </div>
    );
  }
}
export default MapContainer;
