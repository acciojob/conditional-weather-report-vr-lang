import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay.js';

function App() {
  const [weather] = useState({
    temperature: 15,
    conditions: "Sunny"
  });

  return (
    <div className="App">
      <WeatherDisplay temperature={weather.temperature} conditions={weather.conditions} />
    </div>
  );
}

export default App;
