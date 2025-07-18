import React, { useState } from 'react';
import './LocationSelector.css'; // You'll create this CSS file for styling

function LocationSelector() {
  const [selectedLocation, setSelectedLocation] = useState('');

  const locations = [
    'Chennai',
    'RO-TamilNadu',
    'Bengaluru',
    'RO-Karnataka',
    'Andhra Pradesh',
    'Telangana',
    'Kerala',
    'Puducherry',
    'Goa',
    'Chhattisgarh',
    'Madhya Pradesh',
    'West Bengal',
    'Odisha',
  ];

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
    // In a real application, you would likely trigger an action here
    // like fetching stores for the selected location or updating context.
    console.log('Selected Location:', event.target.value);
  };

  return (
    // <section className="LocationSelco" id="LocationSelector"></section>
    <div className="location-selector-container" id="LocationSelector">
      <p> Explore a delightful array of CREAMY PUFF , CAKES , CHOCOLATE and DONUTS.
         <br/>Discover your ice cream destination.</p>
      <div className="dropdown-wrapper">
        
        <select
          className="location-dropdown"
          value={selectedLocation}
          onChange={handleLocationChange}
        >
          <option value="" disabled>Select Your Location</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
        <span className="dropdown-arrow">▼</span> {/* Custom arrow */}
      </div>
      {selectedLocation && (
        <p className="selected-info">
          You have selected: <strong>{selectedLocation}</strong>. You can now proceed to order.
        </p>
      )}
    </div>
  );
}

export default LocationSelector;