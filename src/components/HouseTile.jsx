// src/HouseTile.js
import React from 'react';
import './HouseTile.css'; // Import CSS for styling

const HouseTile = ({ house }) => {
    return (
        <div className="house-tile">
            <img src={house.image} alt={house.title} className="house-image" />
            <h3 className="house-title">{house.title}</h3>
            <p className="house-price">${house.price} / night</p>
            <p className="house-location">{house.location}</p>
        </div>
    );
};

export default HouseTile;