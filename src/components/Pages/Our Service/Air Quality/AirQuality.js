import React, { useState } from 'react';
import axios from 'axios';
import './AirQuality.css';

const App = () => {
  const [cityInput, setCityInput] = useState('');
  const [currentAirQuality, setCurrentAirQuality] = useState(null);
  const [airQualityForecast, setAirQualityForecast] = useState([]);

  const API_KEY = "35cd16996163bf0c286748a00211021ffebdcfc7";

  const getAirQualityDetails = async () => {
    try {
      const response = await axios.get("https://api.waqi.info/feed/here/?token=35cd16996163bf0c286748a00211021ffebdcfc7");
      const data = response.data;
      console.log(data);
      if (data && data.status === "ok") {
        setCurrentAirQuality(data.data);
        setAirQualityForecast(data.data.forecast.daily); // Set the forecast data
      } else {
        console.error('Error: No air quality data found for this city.');
      }
    } catch (error) {
      console.error('Error fetching air quality data:', error);
    }
  };

  const handleCityInputChange = (e) => {
    setCityInput(e.target.value);
  };

  const handleSearchButtonClick = () => {
    getAirQualityDetails();
    setCityInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchButtonClick();
    }
  };

  const getAirQualityStatus = () => {
    const { o3, co, no2 } = currentAirQuality.iaqi;

    if (o3.v <= 50 && co.v <= 50 && no2.v <= 50) {
      return "Air quality is good.";
    } else {
      return "Air quality is poor.";
    }
  };

  return (
    <div className="air-quality">
      <h1 className='airheading'>Air Quality Dashboard</h1>
      <div className="container" id="main-container">
        <div className="air-quality-input">
          <h3>Enter a City Name</h3>
          <input
            type="text"
            value={cityInput}
            onChange={handleCityInputChange}
            onKeyPress={handleKeyPress}
            placeholder="E.g., Jadavpur, Kolkata, India"
          />
          <button onClick={handleSearchButtonClick} className="search-btn">Search</button>
          <div className="separator">or</div>
        </div>
        <div className="air-quality-data">
          <div className="current-air-quality">
            {currentAirQuality && (
              <>
                <div className="details">
                  <h2>{currentAirQuality.city.name} ({currentAirQuality.time.s.split(" ")[0]})</h2>
                  <h6>Oxygen (O2): {currentAirQuality.iaqi.o3.v} µg/m³</h6>
                  <h6>Carbon Dioxide (CO2): {currentAirQuality.iaqi.co.v} µg/m³</h6>
                  <h6>Nitrogen Dioxide (NO2): {currentAirQuality.iaqi.no2.v} µg/m³</h6>
                </div>
                <div className="air-quality-status">
                  <h2>Air Quality Status</h2>
                  <p>{getAirQualityStatus()}</p>
                </div>
              </>
            )}
          </div>
          <div className="days-air-quality-forecast">
            <h2>5-Day Air Quality Forecast</h2>
            <ul className="air-quality-cards">
              {airQualityForecast && airQualityForecast.o3 && airQualityForecast.o3.map((forecast, index) => (
                <li key={index} className="card">
                  <h3>{forecast.day}</h3>
                  <h6>Maximum O3: {forecast.max}</h6>
                  <h6>Minimum O3: {forecast.min}</h6>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
