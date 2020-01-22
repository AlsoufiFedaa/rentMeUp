import React from "react";
import PropTypes from "prop-types";

const Card = ({ property }) => {
  const {
    index,
    message
  
   
  } = property;
  return (
    <div id={`card-${index}`} className="card">
      <div className="details">
        <span className="index">{index + 1}</span>
        <p className="location">
          
         
          {message}
        </p>
       
      
      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;
