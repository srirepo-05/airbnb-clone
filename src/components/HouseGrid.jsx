// src/HouseGrid.js
import React from 'react';
import HouseTile from './HouseTile';
import './HouseGrid.css'; // Import CSS for styling

const HouseGrid = ({ houses }) => {
    return (
        <div className="house-grid">
            {houses.map((house, index) => (
                <HouseTile key={index} house={house} />
            ))}
        </div>
    );
};

export default HouseGrid;