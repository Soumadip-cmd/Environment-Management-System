import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WaterHeader from './WaterHeader';
import './WaterManagement.css';

const WaterManagement = () => {
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    const fetchRandomImages = async () => {
      try {
        const response = await axios.get('https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
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
