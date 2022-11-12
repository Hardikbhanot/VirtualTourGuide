import React from "react";
import './LocationCard.scss';
import {Link} from "react-router-dom";


const LocationCard = ({ cityName,page }) => {
  return (
    <>
      <div className="lt-location-card">
        <Link to={page}>
          <h3>{cityName}</h3>
        </Link>
      </div>
    </>
  );
};

export default LocationCard;
