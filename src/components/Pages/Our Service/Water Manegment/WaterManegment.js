import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WaterHeader from './WaterHeader';
import './WaterManagement.css';

const WaterManagement = () => {
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await axios.get('https://source.unsplash.com/random/1536x500?/watermanagement');
        console.log(response.request.responseURL); // Log the response URL
        setRandomImage(response.request.responseURL); // Set the response URL
      } catch (error) {
        console.error('Error fetching random image:', error);
      }
    };

    fetchRandomImage();
  }, []);

  return (
    <div className="water-body">
      <WaterHeader />
      <div className="container mt-5">
        <div className="border p-4 rounded">
          <div className="random-image">
            {randomImage && <img src={randomImage} alt="Random Image" />}
          </div>
          <h2>Water Leakage Reporting</h2>
        </div>
      </div>
    </div>
  );
};

export default WaterManagement;
