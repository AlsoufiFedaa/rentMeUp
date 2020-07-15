import React from 'react';
const Estate = ({ estate }) => {
  const { city, price, type, url } = estate;
  console.log(city, price, type, url[0]);
  return (
    <article className="room">
      <img src={url[0]} alt="estate" objectFit="contain" />
      <p className="room-info">
        {type} - {city} - ${price}
      </p>
    </article>
  );
};
export default Estate;
