import React, { useState, useEffect } from 'react';
import WaterHeader from './WaterHeader';
import axios from 'axios';
import './WaterManagement.css';

const WaterManagement = () => {
  const [randomImages, setRandomImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchRandomImages = async () => {
      try {
        const response = await axios.get('https://source.unsplash.com/random/1536x500?/nature');
        setRandomImages([response.request.responseURL]);
      } catch (error) {
        console.error('Error fetching random images:', error);
      }
    };

    fetchRandomImages();
  }, []);

  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleUpload = () => {
    // Logic to upload the selected image
    alert('Image uploaded successfully!');
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="water-body">
      <WaterHeader />
      <div className="container mt-5">
        <div className="border p-4 rounded">
          <h2>Water Leakage Reporting</h2>
          <div className="mb-3">
            <label htmlFor="report">Write your water leakage problem:</label>
            <textarea className="form-control" id="report" rows="3"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="imageUpload">Upload Image:</label>
            <input
              type="file"
              className="form-control"
              id="imageUpload"
              accept="image/jpeg, image/png"
              onChange={handleImageChange}
            />
          </div>
          {selectedImage && (
            <div className="mb-3">
              <img src={selectedImage} alt="Selected" className="img-fluid" />
            </div>
          )}
          <button className="btn btn-primary" onClick={handleUpload}>Upload</button>
        </div>
      </div>
      <div className="container mt-5">
        <div className="border p-4 rounded">
          <div className="random-images">
            {randomImages.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Random Image ${index}`} className="img-fluid" />
            ))}
          </div>
        </div>
      </div>
      <button className="scroll-button" onClick={scrollToBottom}>Scroll to Bottom</button>
    </div>
  );
};

export default WaterManagement;
