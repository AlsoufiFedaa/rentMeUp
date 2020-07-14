import React from 'react';
const Estate = ({ estate }) => {
  const { city, street, price, type, url } = estate;

  return (
    <article className="room">
      <div className="img-container">
        <img src={url[0]} alt="estate" />
        <div className="price-top">
          <h6> ${price}</h6>
          <p> {type}</p>
        </div>
      </div>
      <p className="room-info">{city}</p> 
    </article>
  );
};
export default Estate;
