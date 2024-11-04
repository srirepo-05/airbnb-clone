import React, { useState } from 'react';
import './form.css'; // Ensure you import your styles

const DropdownForm = () => {
    const [destination, setDestination] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({ destination, checkIn, checkOut, guests });
    };

    return (
        <form className="dropdown-form" onSubmit={handleSubmit}>
            <select 
                value={destination} 
                onChange={(e) => setDestination(e.target.value)} 
                required
            >
                <option value="" disabled>Select Destination</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                {/* Add more destinations as needed */}
            </select>

            <input 
                type="date" 
                value={checkIn} 
                onChange={(e) => setCheckIn(e.target.value)} 
                required 
                placeholder="Check In"
            />

            <input 
                type="date" 
                value={checkOut} 
                onChange={(e) => setCheckOut(e.target.value)} 
                required 
                placeholder="Check Out"
            />

            <select 
                value={guests} 
                onChange={(e) => setGuests(e.target.value)} 
                required
            >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                {/* Add more options as needed */}
            </select>

            <button type="submit" className="search-button">
                <img 
                    src="https://static.vecteezy.com/system/resources/previews/009/652/218/non_2x/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg" 
                    alt="Search" 
                    className="search-icon" 
                />
            </button>
        </form>
    );
};

export default DropdownForm;