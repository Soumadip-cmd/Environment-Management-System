import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AirQuality.css';

const AirQuality = () => {
  const [cityInput, setCityInput] = useState('');
  const [currentAirQuality, setCurrentAirQuality] = useState(null);
  const [airQualityForecast, setAirQualityForecast] = useState([]);
  const [showLocationPrompt, setShowLocationPrompt] = useState(true);
  const [errorAlert, setErrorAlert] = useState('');
  const [airQualityStatus, setAirQualityStatus] = useState('');

  useEffect(() => {
    if (!cityInput) {
      setShowLocationPrompt(true);
    } else {
      setShowLocationPrompt(false);
    }
  }, [cityInput]);

  const getAirQualityDetails = async (city) => {
    try {
      const response = await axios.get(`https://api.waqi.info/feed/${city}/?token=35cd16996163bf0c286748a00211021ffebdcfc7`);
      const data = response.data;
      console.log(data);
      if (data && data.status === "ok") {
        setCurrentAirQuality(data.data);
        setAirQualityForecast(data.data.forecast.daily);
        setErrorAlert('');
        setAirQualityStatus(getAirQualityStatus(data.data.iaqi));
      } else {
        console.error('Error: No air quality data found for this location.');
        setErrorAlert("Error: No air quality data found for this location.");
        setAirQualityStatus('');
      }
    } catch (error) {
      console.error('Error fetching air quality data:', error);
      setErrorAlert("Error fetching air quality data. Please try again.");
      setAirQualityStatus('');
    }
  };

  const handleCityInputChange = (e) => {
    setCityInput(e.target.value);
  };

  const handleSearchButtonClick = () => {
    getAirQualityDetails(cityInput);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getAirQualityDetails(cityInput);
    }
  };

  const handleGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          getAirQualityDetails(latitude + ";" + longitude);
        },
        (error) => {
          console.error('Error getting geolocation:', error);
          alert('Error getting geolocation. Please try again or enter a city name manually.');
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      alert('Geolocation is not supported by this browser.');
    }
  };

  const getAirQualityStatus = (iaqi) => {
    let airQuality = 'very good';

    for (const key in iaqi) {
      if (iaqi.hasOwnProperty(key)) {
        const value = iaqi[key].v;
        if (value > 50) {
          airQuality = 'Poor';
          break;
        }
      }
    }

    return airQuality;
  };

  return (
    <div className="air-quality">
      <h1 className='airheading'>Air Quality Dashboard</h1>
      <div className="container" id="main-container">
        <div className="air-quality-input">
          <input
            type="text"
            value={cityInput}
            onChange={handleCityInputChange}
            onKeyPress={handleKeyPress}
            placeholder="E.g., Jadavpur, Kolkata, India"
          />
          <button onClick={handleSearchButtonClick} className="search-btn">Search</button>
          <div className="separator"></div>
          <button type="button" className="btn btn-success" onClick={handleGeoLocation}>Live Location</button>
        </div>
        <div className="air-quality-data">
          {errorAlert && <p>{errorAlert}</p>}
          {showLocationPrompt ? (
            <h1> Enter the data to see the air quality status</h1>
          ) : (
            <div className="current-air-quality">
              {currentAirQuality && (
                <>
                  <div className="details">
                    <h2>{currentAirQuality.city.name} ({currentAirQuality.time.s.split(" ")[0]})</h2>
                    {Object.entries(currentAirQuality.iaqi).map(([key, value]) => (
                      <h6 key={key}>{key.toUpperCase()}: {value.v} µg/m³</h6>
                    ))}
                  </div>
                  <div className="air-quality-status">
                    <h2>Air Quality Status</h2>
                    <p>{airQualityStatus}</p>
                  </div>
                </>
              )}
            </div>
          )}
          <div className="days-air-quality-forecast">
            <h2>5-Day Air Quality Forecast</h2>
            <div className="air-quality-cards">
              {airQualityForecast && airQualityForecast.map((forecastDay, index) => (
                <div key={index} className="card">
                  <h3>{forecastDay.day}</h3>
                  <h6>O2: {forecastDay.o2} µg/m³</h6>
                  <h6>PM10: {forecastDay.pm10} µg/m³</h6>
                  <h6>PM25: {forecastDay.pm25} µg/m³</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
