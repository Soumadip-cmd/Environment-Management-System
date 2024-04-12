import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WaterHeader from './WaterHeader';
import './WaterManagement.css';

const WaterManagement = () => {
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    const fetchRandomImages = async () => {
      try {
        const response = await axios.get('https://source.unsplash.com/random/1536x500?/nature');
        console.log(response.data); // Log the response data
        setRandomImages(response.data);
      } catch (error) {
        console.error('Error fetching random images:', error);
      }
    };

    fetchRandomImages();
  }, []);

  return (
    <div className="water-body">
      <WaterHeader />
      <div className="container mt-5">
        <div className="border p-4 rounded">
          <div className="random-images">
            {randomImages.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Random Image ${index}`} />
            ))}
          </div>
          <h2>Water Leakage Reporting</h2>
        </div>
      </div>
    </div>
  );
};

export default WaterManagement;
