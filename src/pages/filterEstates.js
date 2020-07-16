import React from 'react';
import Title from '../Components/Title';
import { Link } from 'react-router-dom';

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
const FilterEstates = ({
  handleChange,
  type,
  roomNum,
  estates,
  city,
  street,
  price,
  minprice,
  maxprice,
  minspace,
  maxspace,
  downtown,
  overLookingSea,
}) => {
  //get cities
  let cities = getUnique(estates, 'city');
  //add all
  cities = ['all', ...cities]; //add all and whatever you have in types

  //map to render jsx
  cities = cities.map((item, index) => {
    return (
      <option value={item} key={index} className="opt">
        {item}
      </option>
    );
  });
  //get streets
  let streets = getUnique(estates, 'street');
  //add all
  streets = ['all', ...streets]; //add all and whatever you have in types
  //map to render jsx
  streets = streets.map((item, index) => {
    return (
      <option value={item} key={index} className="opt">
        {item}
      </option>
    );
  });
  //get types
  let types = getUnique(estates, 'type');
  //add all
  types = ['all', ...types]; //add all and whatever you have in types
  //map to render jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index} className="opt">
        {item}{' '}
      </option>
    );
  });
  let roomsNumber = getUnique(estates, 'roomNum');
  roomsNumber = roomsNumber.map((item, index) => {
    return (
      <option value={item} key={index} className="opt">
        {item}{' '}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="Search Estates" />
      <form className="filter-form">
        {/* SelectType  */}
        <div className="form-group">
          <label style={{ color: '#000', marginLeft: 40 }} htmlFor="type">
            Type
          </label>
          <select
            name="type"
            id="type"
            className="form-control"
            value={type}
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* EndType */}
        {/* select City  */}

        <div className="form-group">
          <label style={{ color: '#000', marginLeft: 40 }} htmlFor="City">
            City
          </label>
          <select
            name="city"
            id="city"
            className="form-control"
            value={city}
            onChange={handleChange}
          >
            {cities}
          </select>
        </div>
        {/* end city Select */}
        {/* select street  */}

        <div className="form-group">
          <label style={{ color: '#000', marginLeft: 40 }} htmlFor="street">
            Street
          </label>
          <select
            name="street"
            id="street"
            className="form-control"
            value={street}
            onChange={handleChange}
          >
            {streets}
          </select>
        </div>
        {/* end street Select */}

        {/* SelectNum */}
        <div className="form-group">
          <label style={{ color: '#000', marginLeft: 40 }} htmlFor="roomNum">
            Rooms
          </label>
          <select
            name="roomNum"
            id="roomNum"
            className="form-control"
            value={roomNum}
            onChange={handleChange}
          >
            {roomsNumber}
          </select>
        </div>

        {/* EndNum */}
        {/* estate price */}
        <div className="form-group">
          <label style={{ color: '#000', marginLeft: 40 }} htmlFor="price">
            Price {price}₪
          </label>
          <input
            type="range"
            name="price"
            min={minprice}
            max={maxprice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of price */}

        <div>
          <Link to="/AddPropery" className="btn-primary">
            Add Estate
          </Link>
        </div>
      </form>
    </section>
  );
};
export default FilterEstates;
