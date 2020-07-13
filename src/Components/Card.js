import React from "react";
import PropTypes from "prop-types";
import Rating from "react-rating";
import userPic from "../assets/userPic.png";
import emptyStar from "../assets/star-empty.png";
import fullStar from "../assets/PngItem_3174427.png";
import { withRouter } from "react-router-dom";
const Card = ({ property }) => {
  const { index, massage, rating, name } = property;

  return (
    <div id={`card-${index}`} className="card" style={{ borderRadius: 25 }}>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
        className="details"
      >
        {/* <span className="index">{index + 1}</span> */}
        <img
          style={{ marginTop: 20 }}
          src={userPic}
          width="150"
          height="100"
          alt="user"
        />
        <h4 style={{ marginTop: 20 }}>{name}</h4>
        <p className="location">{massage}</p>
        <Rating
          style={{ marginTop: 18, marginLeft: 10 }}
          emptySymbol={
            <img
              src={emptyStar}
              className="icon"
              width="30"
              height="30"
              alt="Emptystar"
            />
          }
          initialRating={rating}
          fullSymbol={
            <img
              src={fullStar}
              className="icon"
              width="30"
              height="30"
              alt="Fullstar"
            />
          }
          disabled
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;
