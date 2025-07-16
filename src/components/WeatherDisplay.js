import React from 'react';

function WeatherDisplay({ temperature, conditions }) {
  const tempStyle = {
    color: temperature > 20 ? 'red' : 'blue'
  };

  return (
    <div>
      <p>
        Temperature: <span style={tempStyle}>{temperature}</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
}

export default WeatherDisplay;
