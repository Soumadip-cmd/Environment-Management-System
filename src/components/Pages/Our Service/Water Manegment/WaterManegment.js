import React, { useState, useEffect } from 'react';
import WaterHeader from './WaterHeader'; 
import axios from 'axios';
import './WaterManagement.css';
import { Link } from 'react-router-dom';

const WaterManagement = () => {
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    const fetchRandomImages = async () => {
      try {
        const response = await axios.get('https://source.unsplash.com/random/1536x500?/water');
        setRandomImages([response.request.responseURL]);
      } catch (error) {
        console.error('Error fetching random images:', error);
      }
    };

    fetchRandomImages();
  }, []);

  return (
    <div className="water-body">
      <h1 className="mt-3 mb-4 text-center">Water Leakage Problems</h1>
      <WaterHeader /> 
      <div className="container mt-5">
        <div className="border p-4 rounded">
          <h2 className="mb-4">Water Leakage Reporting</h2>
          <div className="random-images">
            {randomImages.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Random Image ${index}`} className="img-fluid mb-3" />
            ))}
          </div>
          <div className="dropdown mb-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Choose if you are a contributor or a customer
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <Link className="dropdown-item" to="/waterreportform" target="_blank" rel="noopener noreferrer">Contributor</Link>
              </li>
              <li><Link className="dropdown-item" to="/waterreportform2" target="_blank" rel="noopener noreferrer">Customer</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterManagement;
