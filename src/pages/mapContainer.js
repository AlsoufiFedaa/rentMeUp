import React, { Component } from 'react';
import Map from './mainMap';
import FilterEstates from './filterEstates';
import { Link } from 'react-router-dom';
import { Marker, Popup } from 'react-map-gl';
import { AuthContext } from '../Components/auth';

import * as firebase from 'firebase';

class MapContainer extends Component {
  state = {
    estates: [],
    sortedEstates: [],
    type: 'all',
    city: 'all',
    street: 'all',
    price: 100,
    minprice: 0,
    maxprice: 0,
    minspace: 0,
    maxspace: 0,
    roomNum: 4,
    downtown: false,
    overLookingSea: false,
    prev_infowindow: 0,
    newEstates: [],
    query: firebase.firestore().collection('estates'),
  };
  static contextType = AuthContext;
  async componentDidMount() {
    const { estates } = this.state;
    const snapshot = await firebase
      .firestore()
      .collection('estates')
      .get();

    snapshot.forEach((doc) => {
      let data = doc.data();

      data.id = doc.id;

      estates.push(data);
      this.setState({ estates });
      this.setState({ sortedEstates: this.state.estates });
    });

    let maxprice = Math.max(...this.state.estates.map((item) => item.price));
    let maxspace = Math.max(...this.state.estates.map((item) => item.space));
    this.setState({ maxprice, maxspace });
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'radio' ? target.checked : target.value;
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

      price,

      roomNum,

      newEstates,
      query,
    } = this.state;

    // convert to integer

    price = parseInt(price);
    console.log('state', type, city, street, roomNum);

    if (city !== 'all' && type !== 'all' && street !== 'all' && roomNum !== 1) {
      query
        .where('city', '==', city)
        .where('type', '==', type)
        .where('street', '==', street)
        .where('roomNum', '==', roomNum)

        .get()
        .then((querySnapshot) => {
          console.log(querySnapshot);
          querySnapshot.forEach((doc) => {
            let data = doc.data();

            data.id = doc.id;
            newEstates.push(data);
            this.setState({ newEstates });
            console.log('newstate');
            this.setState({ sortedEstates: newEstates });
          });
        });
    }
    {
      this.state.newEstates && price
        ? (newEstates = this.state.newEstates.filter(
            (item) => item.price >= price
          ))
        : console.log('no Filtering');
    }
    this.setState({ sortedEstates: newEstates });
  };

  openInfo = (i) => {
    const { prev_infowindow } = this.state;
    const { sortedEstates } = this.state;
    sortedEstates[i].isOpen = true;

    this.setState(sortedEstates);
    if (this.state.prev_infowindow !== i) {
      sortedEstates[prev_infowindow].isOpen = false;
      this.setState({ prev_infowindow: i });
    }
    this.setState({ prev_infowindow: i });
  };

  displayMarkers = () => {
    return this.state.sortedEstates.map((item, index) => {
      return (
        <div key={index}>
          {/*Marker*/}

          <Marker
            latitude={item.lat}
            longitude={item.lng}
            offsetTop={-34.38}
            offsetLeft={-14.5}
            key={index}
          >
            <button
              style={{
                backgroundColor: 'transparent',
                borderColor: 'transparent',
              }}
              onClick={(e) => {
                e.preventDefault();

                this.openInfo(index);
              }}
            >
              <img
                src={require('../assets/Webp.net-resizeimage.png')}
                width={50}
                alt={'estate'}
              />
            </button>
          </Marker>
          {item.isOpen && (
            <Popup
              onClose={this.onInfoWindowClose}
              latitude={item.lat + 0.009}
              longitude={item.lng + 0.009}
              key={index}
            >
              <div
                style={{
                  padding: 3,
                  width: 150,
                  height: 196,
                  alignItems: 'center',
                }}
                className="infoWfin"
              >
                <h4 className="infotype"> {item.type}</h4>
                <img
                  alt="50*50"
                  src={item.url[0]}
                  width="145"
                  height="60"
                  className="imageInfo"
                />
                <span style={{ padding: 0, margin: 0 }} className="infoStreet">
                  {item.street}
                </span>
                <h4 className="infoprice"> {item.price}</h4>

                <Link
                  to={{
                    pathname: `/SingleEstate/${item.id}`,
                  }}
                  className="infobtn"
                >
                  More
                </Link>
              </div>
            </Popup>
          )}
        </div>
      );
    });
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
